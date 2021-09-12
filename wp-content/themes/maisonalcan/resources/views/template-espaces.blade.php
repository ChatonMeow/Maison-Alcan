{{--
  Template Name: Espaces
--}}

@extends('layouts.app')
@php $fields = $getfields; @endphp

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.hero', ['text' => $fields['hero']['texte'], 'image' => $fields['hero']['image'], 'title' => get_the_title()])

    {{ var_dump($fields) }}
  @endwhile
@endsection
