{{--
  Template Name: Home
--}}

@extends('layouts.app')
@php $fields = $getfields; @endphp

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.marquee', ['text' => $fields['marquise']])
    @include('partials.hero', ['text' => $fields['hero']['texte'], 'image' => $fields['hero']['image'], 'home' => true])
    <div class="history" data-scroll data-scroll-call="arrow">
      <div class="container">
        @if($fields['historique']['titre'])
          <h2 class="title with-arrow">
            {{ $fields['historique']['titre'] }}
            <div id="arrow"></div>
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
                <div class="swiper-slide" data-scroll data-scroll-speed="{{ $loop->index / 2 }}">
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
    <div class="spaces" data-scroll>
      <div class="top">
        @if($fields['espaces']['image'])
          <div class="img">
            <img src="{{ $fields['espaces']['image']['sizes']['2048x2048'] }}" data-scroll data-scroll-speed="1" alt="">
          </div>
        @endif
        @if($fields['espaces']['titre'])
          <div class="title__wrapper" data-scroll data-scroll-speed=".5" data-scroll-direction="horizontal">
            <h2 class="title">
              {{ $fields['espaces']['titre'] }}
            </h2>
          </div>
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
    <div class="residents" data-scroll data-scroll-call="arrow">
      <div class="container">
        <div class="infos">
          @if($fields['residents']['titre'])
            <h2 class="title with-arrow">
              {{ $fields['residents']['titre'] }}
              <div id="arrow"></div>
            </h2>
          @endif
          @if($fields['residents']['texte'])
            <div class="txt">
              {{ $fields['residents']['texte'] }}
            </div>
          @endif
        </div>
        @if($fields['residents']['image'])
          <div class="img">
            <img src="{{ $fields['residents']['image']['sizes']['1536x1536'] }}" alt="{{ $fields['residents']['image']['alt'] }}" data-scroll data-scroll-speed="1">
          </div>
        @endif
      </div>
      @if(!empty($fields['residents']['residents']))
        <div class="marquee__wrapper" data-scroll>
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
