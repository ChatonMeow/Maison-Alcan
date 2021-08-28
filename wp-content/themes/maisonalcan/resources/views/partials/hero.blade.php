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
    <img src="{{ $image['sizes']['1536x1536'] }}" alt="{{ $image['alt'] }}" class="img">
  @endif
</div>