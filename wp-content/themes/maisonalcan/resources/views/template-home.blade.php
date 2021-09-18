{{--
  Template Name: Home
--}}

@extends('layouts.app')
@php $fields = $getfields; @endphp

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.marquee', ['text' => $fields['marquise']])
    @include('partials.hero', ['text' => $fields['hero']['texte'], 'image' => $fields['hero']['image'], 'home' => true])
    <div class="history">
      <div class="container">
        @if($fields['historique']['titre'])
          <h2 class="title with-arrow">
            {{ $fields['historique']['titre'] }}
            <img src="@asset('images/arrow.svg')" alt="">
          </h2>
        @endif
        <div class="infos">
          <div class="txt">
            {{ $fields['historique']['texte'] }}
          </div>
          @if($fields['historique']['bouton'])
            <a href="{{ $fields['historique']['bouton']['url'] }}" class="button" target="{{ $fields['historique']['bouton']{'target'} }}">
              {{ $fields['historique']['bouton']['title'] }}
            </a>
          @endif
        </div>
        @if(!empty($fields['historique']['cartes']))
          <div class="cards">
            <div class="swiper-wrapper">
              @foreach($fields['historique']['cartes'] as $card)
                <div class="swiper-slide">
                  @if($card['image'])
                    <img src="{{ $card['image']['sizes']['medium'] }}" alt="{{ $card['image']['alt'] }}" />
                  @endif
                  @if($card['texte'])
                    <div class="txt">
                      {{ $card['texte'] }}
                    </div>
                  @endif
                </div>
              @endforeach
            </div>
            <div class="pager"></div>
          </div>
        @endif
      </div>
    </div>
    <div class="spaces">
      <div class="top">
        @if($fields['espaces']['image'])
          <div class="img" style="background-image: url('{{ $fields['espaces']['image']['sizes']['1536x1536'] }}');"></div>
        @endif
        @if($fields['espaces']['titre'])
          <h2 class="title">
            {{ $fields['espaces']['titre'] }}
          </h2>
        @endif
      </div>
      <div class="bot">
        <div class="infos">
          @if($fields['espaces']['court_texte'])
            <div class="label">
              {{ $fields['espaces']['court_texte'] }}
            </div>
          @endif
          @if($fields['espaces']['texte'])
            <div class="txt">
              {{ $fields['espaces']['texte'] }}
            </div>
          @endif
        </div>
        @if($fields['espaces']['bouton'])
          <a href="{{ $fields['espaces']['bouton']['url'] }}" target="{{ $fields['espaces']['bouton']['target'] }}" class="button">
            {{ $fields['espaces']['bouton']['title'] }}
          </a>
        @endif
      </div>
    </div>
    <div class="residents">
      <div class="container">
        <div class="infos">
          @if($fields['residents']['titre'])
            <h2 class="title with-arrow">
              {{ $fields['residents']['titre'] }}
              <img src="@asset('images/arrow.svg')" alt="">
            </h2>
          @endif
          @if($fields['residents']['texte'])
            <div class="txt">
              {{ $fields['residents']['texte'] }}
            </div>
          @endif
        </div>
        @if($fields['residents']['image'])
          <img src="{{ $fields['residents']['image']['sizes']['large'] }}" alt="{{ $fields['residents']['image']['alt'] }}" class="img">
        @endif
      </div>
      @if(!empty($fields['residents']['residents']))
        <div class="marquee__wrapper">
          <div class="marquee">
            @for ($i = 1; $i < 5; $i++)
              <div class="marquee__inner">
                @foreach($fields['residents']['residents'] as $resident)
                  @if(has_post_thumbnail($resident->ID))
                    <div class="resident">
                      <img src="{{ get_the_post_thumbnail_url($resident->ID, 'medium') }}" alt="{{ $resident->post_title }}">
                    </div>
                  @endif
                @endforeach
              </div>
            @endfor
          </div>
        </div>
      @endif
      @if($fields['residents']['bouton'])
        <a href="{{ $fields['residents']['bouton']['url'] }}" target="{{ $fields['residents']['bouton']['target'] }}" class="button">
          {{ $fields['residents']['bouton']['title'] }}
        </a>
      @endif
    </div>
  @endwhile
@endsection
