<!doctype html>
<html {!! get_language_attributes() !!}>
@include('partials.head')

<body @php body_class() @endphp>
  <div class="main" data-scroll-container>
    @php do_action('get_header') @endphp
    @include('partials.header')
    <main class="main__content">
      @yield('content')
      <p>tolkolol</p>
      <p>tolkolol</p>
      <p>tolkolol</p>
      <p>tolkolol</p>
      <p>tolkolol</p>
      <p>tolkolol</p>
      <p>tolkolol</p>
      <p>tolkolol</p>
      <p>tolkolol</p>
      <p>tolkolol</p>
      <p>tolkolol</p>
      <p>tolkolol</p>
      <p>tolkolol</p>
      <p>tolkolol</p>
      <p>tolkolol</p>
      <p>tolkolol</p>
      <p>tolkolol</p>
    </main>
    @php do_action('get_footer') @endphp
    @include('partials.footer')
    @php wp_footer() @endphp
  </div>
</body>

</html>