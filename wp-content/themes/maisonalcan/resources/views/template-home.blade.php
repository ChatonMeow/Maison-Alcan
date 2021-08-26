{{--
  Template Name: Home
--}}

@extends('layouts.app')
@php $fields = $getfields; @endphp

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.marquee', ['text' => $fields['marquise']])
    @include('partials.hero', ['title' => App::title(), 'text' => $fields['hero']['texte'], 'image' => $fields['hero']['image'], 'home' => true])
    @include('partials.page-header')
    @include('partials.content-page')
  @endwhile
@endsection
