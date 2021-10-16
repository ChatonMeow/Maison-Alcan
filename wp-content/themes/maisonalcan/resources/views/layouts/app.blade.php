<!doctype html>
<html {!! get_language_attributes() !!} class="has-scroll-init">
@include('partials.head')

<body @php body_class() @endphp>
  <div class="main" data-scroll-container>
    @php do_action('get_header') @endphp
    @include('partials.header')
    <main class="main__content">
      @yield('content')
    </main>
    @php do_action('get_footer') @endphp
    @include('partials.footer')
    @php wp_footer() @endphp
  </div>
  @include('partials.loader')
</body>

</html>