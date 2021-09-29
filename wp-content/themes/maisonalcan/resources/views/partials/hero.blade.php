<div class="hero {{ $home ? 'is-home' : '' }}">
  <div class="infos">
    @if($title)
      <h1 class="title with-arrow">
        {!! $title !!}
        <img src="@asset('images/arrow.svg')" alt="">
      </h1>
    @endif
    @if($text)
      <div class="text">
        {!! $text !!}
      </div>
    @endif
  </div>
  @if($image)
    <div class="img" style="background-image: url('{{ $image['sizes']['2048x2048'] }}');"></div>
  @endif
</div>