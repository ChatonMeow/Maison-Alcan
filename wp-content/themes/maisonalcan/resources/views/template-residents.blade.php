{{--
  Template Name: Résidents
--}}

@extends('layouts.app')
@php $fields = $getfields; @endphp

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.hero', ['text' => $fields['hero']['texte'], 'image' => $fields['hero']['image'], 'title' => get_the_title()])
    @if($residents)
      <div class="residents container">
        @foreach($residents as $resident)
          <div class="resident" data-scroll data-scroll-speed="{{ $loop->index % 2 === 0 ? 0.5 : 1 }}">
            @php($residentFields = get_fields($resident))
            @if(has_post_thumbnail($resident))
              <img class="logo" src="{{ get_the_post_thumbnail_url($resident->ID, 'medium') }}" alt="{{ $resident->post_title }}">
            @endif
            @if($residentFields['photo'])
              <div class="photo" style="background-image: url('{{ $residentFields['photo']['sizes']['medium'] }}');"></div>
            @endif
            <div class="desc">
              {!! $residentFields['description'] !!}
            </div>
            @if($residentFields['lien'])
              <a href="{{ $residentFields['lien'] }}" target="__blank" class="button">
                {{ __('Voir le site web de', 'maisonalcan') }} {{ $resident->post_title }}
              </a>
            @endif
          </div>
        @endforeach
        <span class="resident empty"></span>
      </div>
    @endif
  @endwhile
@endsection
