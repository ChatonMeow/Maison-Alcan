{{--
  Template Name: Historique
--}}

@extends('layouts.app')
@php $fields = $getfields; @endphp

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.hero', ['text' => $fields['hero']['texte'], 'image' => $fields['hero']['image'], 'title' => get_the_title()])
    @if($fields['contenu_principal'])
      <div class="main-content">
        <div class="container">
          @foreach($fields['contenu_principal'] as $item)
            @if($item['acf_fc_layout'] === 'annee')
              <div class="row year d-{{ $item['type'] }}" data-scroll>
                <div class="left">
                  <h2 class="title">
                    <div>
                      {{ $item['titre_1'] }}
                    </div>
                    <div>
                      {{ $item['annee'] }}
                    </div>
                  </h2>
                  @if($item['image_1'])
                    <img class="img" src="{{ $item['image_1']['sizes']['large'] }}" alt="{{ $item['image_1']['alt'] }}">
                  @endif
                  <div class="desc">
                    {!! $item['texte_1'] !!}
                  </div>
                </div>
                <div class="right">
                  @if($item['type'] === '55-45')
                    <h2 class="title">
                      {{ $item['titre_2'] }}
                    </h2>
                  @endif
                  @if($item['image_2'])
                    <img class="img" src="{{ $item['image_2']['sizes']['large'] }}" alt="{{ $item['image_2']['alt'] }}">
                  @endif
                  <div class="txt">
                    @if($item['type'] !== '55-45')
                      <h2 class="title">
                        {{ $item['titre_2'] }}
                      </h2>
                    @endif
                    <div class="desc">
                      {!! $item['texte_2'] !!}
                    </div>
                  </div>
                </div>
              </div>
            @elseif($item['acf_fc_layout'] === 'texte')
              <div class="row quote" data-scroll>
                {{ $item['texte'] }}
              </div>
            @endif
          @endforeach
        </div>
      </div>
    @endif
    @if($fields['ligne_du_temps'])
      <div class="timeline" data-scroll>
        <div class="container">
          <h3 class="today">
            {{ __("Aujourd'hui",'maisonalcan') }}
          </h3>
          <div class="timeline__inner">
            @foreach($fields['ligne_du_temps'] as $year)
              <div class="timeline__year" data-scroll>
                @if($year['image'])
                  <img src="{{ $year['image']['sizes']['thumbnail'] }}" alt="{{ $year['image']['alt'] }}">
                @endif
                <div class="title">
                  {{ $year['annee'] }}
                </div>
                <div class="txt">
                  {!! $year['texte'] !!}
                  @if($year['boutons'])
                    <div class="btns">
                      @foreach($year['boutons'] as $btn)
                        <a href="{{ $btn['bouton']['url'] }}" target="{{ $btn['bouton']['target'] }}" class="button small">
                          <div class="button__top">
                            {{ $btn['bouton']['title'] }}
                            <img src="@asset('images/arrow-right.svg')" alt="">
                          </div>
                        </a>
                      @endforeach
                    </div>
                  @endif
                </div>
              </div>
            @endforeach
          </div>
        </div>
      </div>
    @endif
    @if($fields['faits_divers'])
      <div class="facts" data-scroll>
        <div class="container">
          <h3 class="title">
            {{ __("Faits divers",'maisonalcan') }}
          </h3>
          <div class="inner">
            <div class="swiper-wrapper">
              @foreach($fields['faits_divers'] as $fact)
                <div class="fact swiper-slide">
                  <div class="title">
                    {{ $fact['titre'] }}
                  </div>
                  <div class="txt">
                    {{ $fact['texte'] }}
                  </div>
                </div>
              @endforeach
            </div>
            <div class="pager"></div>
          </div>
        </div>
      </div>
    @endif
  @endwhile
@endsection
