{{--
  Template Name: Contact
--}}

@extends('layouts.app')
@php $fields = $getfields; @endphp

@section('content')
  @while(have_posts()) @php the_post() @endphp
    <div class="container">
      <div class="top" data-scroll>
        <h1>
          {{get_the_title()}}
        </h1>
        <div class="infos">
          @if($footeraddress)
            <div class="address">
              {!! $footeraddress !!}
              @if($footeraddresslink)
                <a href="{{$footeraddresslink}}" target="_blank">
                  <img src="@asset('images/maps-icon.svg')" alt="">
                </a>
              @endif
            </div>
          @endif
          @if($footeremail)
            <a class="email" href="mailto:{{ $footeremail }}">{{ $footeremail }}</a>
          @endif
        </div>
      </div>
      @if($fields['formulaire'] && !empty($fields['formulaire']))
        <div class="form" data-scroll>
          {!! do_shortcode('[contact-form-7 id="' . $fields['formulaire'][0] . '" title="Contact"]') !!}
        </div>
      @endif
    </div>
  @endwhile
@endsection
