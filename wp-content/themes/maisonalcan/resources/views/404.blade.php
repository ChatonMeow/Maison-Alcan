@extends('layouts.app')

@section('content')
  @if (!have_posts())
    <div class="main-container container">
      <div class="left">
        404
      </div>
      <div class="right">
        <h1>{!! __('Page <br>inexistante','maisonalcan') !!}</h1>
        <a href="{{ __('/','maisonalcan') }}" class="button">{{ __("Retour sur l'accueil",'maisonalcan') }}</a>
      </div>
    </div>
  @endif
@endsection
