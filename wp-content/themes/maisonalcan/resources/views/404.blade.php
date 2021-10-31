@extends('layouts.app')

@section('content')
  @if (!have_posts())
    <div class="main-container container">
      <div class="left">
        404
      </div>
      <div class="right">
        <h1>{!! __('Page <br>inexistante','maisonalcan') !!}</h1>
        <a href="{{ __('/','maisonalcan') }}" class="button">
          <div class="button__top">
            {{ __("Retour sur l'accueil",'maisonalcan') }}
            <img src="@asset('images/arrow-right.svg')" alt="">
          </div>
          <div class="button__bot">
            @for ($i = 1; $i < 4; $i++)
              <div class="bot-marquee">
                {{ __("Retour sur l'accueil",'maisonalcan') }}
                <img src="@asset('images/arrow-right.svg')" alt="">
              </div>
            @endfor
          </div>
        </a>
      </div>
    </div>
  @endif
@endsection
