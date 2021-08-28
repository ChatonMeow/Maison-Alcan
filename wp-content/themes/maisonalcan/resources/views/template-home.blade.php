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
    @php var_dump($fields) @endphp
    @include('partials.page-header')
    @include('partials.content-page')
  @endwhile
@endsection
