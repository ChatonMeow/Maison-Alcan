<div class="hero {{ $home ? 'is-home' : '' }}" data-scroll data-scroll-call="arrow">
  <div class="infos">
    @if($title)
      <div class="title-wrapper">
        <h1 class="title with-arrow">
          {!! $title !!}
          <div class="arrow"></div>
        </h1>
      </div>
    @endif
    @if($text)
      <div class="text">
        {!! $text !!}
      </div>
    @endif
  </div>
  @if($image)
    <div class="img">
      <img src="{{ $image['sizes']['2048x2048'] }}" data-scroll data-scroll-speed="1" alt="">
    </div>
  @endif
</div>