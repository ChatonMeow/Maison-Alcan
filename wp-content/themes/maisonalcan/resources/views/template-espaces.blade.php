{{--
  Template Name: Espaces
--}}

@extends('layouts.app')
@php $fields = $getfields; @endphp

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.hero', ['text' => $fields['hero']['texte'], 'image' => $fields['hero']['image'], 'title' => get_the_title()])
    @if($fields['texte_large'])
      <div class="quote container" data-scroll>
        {{ $fields['texte_large'] }}
      </div>
    @endif
    @if($fields['espaces'])
      <div class="espaces container">
        <div class="top row c-40-60" data-scroll>
          <div class="left">
            @if($fields['espaces']['titre'])
              <h2 class="title">
                {{ $fields['espaces']['titre'] }}
              </h2>
            @endif
          </div>
          <div class="right">
            @if($fields['espaces']['description'])
              <p class="desc">
                {{ $fields['espaces']['description'] }}
              </p>
            @endif
            @if($fields['espaces']['bouton'])
              <a class="button small" href="{{ $fields['espaces']['bouton']['url'] }}" target="{{ $fields['espaces']['bouton']['target'] }}">
                {{ $fields['espaces']['bouton']['title'] }}
              </a>
            @endif
          </div>
        </div>
        @foreach($fields['espaces']['rangee__espaces'] as $row)
          <div class="row spaces c-{{ $row['type'] }}" data-scroll>
            <div class="left">
              @include('partials.espace', [
                'type' => $row['type'] === '40-60' ? 1 : 3, 
                'title' => $row['espace_1']['titre'],
                'icon' => $row['espace_1']['plan'],
                'image' => $row['espace_1']['image'],
                'desc' => $row['espace_1']['description']
                ])
            </div>
            <div class="right">
              @include('partials.espace', [
                'type' => $row['type'] === '40-60' ? 2 : 4, 
                'title' => $row['espace_2']['titre'],
                'icon' => $row['espace_2']['plan'],
                'image' => $row['espace_2']['image'],
                'desc' => $row['espace_2']['description']
                ])
            </div>
          </div>
        @endforeach
      </div>
    @endif
    @if($fields['banniere']['titre'] && $fields['banniere']['bouton'])
      @php $artist = $footerartist @endphp
      <div class="banniere container" data-scroll>
        <div class="inner" @if($artist) style="background-color: {{ $artist['fields']['couleur'] }}; @if($artist['fields']['couleur_texte']) color: {{ $artist['fields']['couleur_texte'] }}; @endif" @endif>
          <div class="title">
            {{ $fields['banniere']['titre'] }}
          </div>
          <a class="button" href="{{ $fields['banniere']['bouton']['url'] }}" target="{{ $fields['banniere']['bouton']['target'] }}">
            {{ $fields['banniere']['bouton']['title'] }}
          </a>
        </div>
      </div>
    @endif
    @if($fields['autres_espaces'])
      <div class="autres-espaces container" data-scroll>
        <div class="top">
          @if($fields['autres_espaces']['titre'])
            <h2 class="title">
              {{ $fields['autres_espaces']['titre'] }}
            </h2>
          @endif
          @if($fields['autres_espaces']['description'])
            <p class="desc">
              {{ $fields['autres_espaces']['description'] }}
            </p>
          @endif
        </div>
        @if($fields['autres_espaces']['espaces'])
          <div class="list">
            @foreach($fields['autres_espaces']['espaces'] as $espace)
              @include('partials.espace', [
                'type' => 4, 
                'title' => $espace['titre'],
                'icon' => $espace['plan'],
                'image' => $espace['image'],
                'desc' => $espace['description']
                ])
            @endforeach
          </div>
        @endif
      </div>
    @endif
  @endwhile
@endsection
