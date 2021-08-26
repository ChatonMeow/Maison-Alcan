<div class="hero">
  <div class="infos">
    @if($title)
      <h1 class="title">
        {!! $title !!}
      </h1>
    @endif
    @if($text)
      <div class="text">
        {!! $text !!}
      </div>
    @endif
  </div>
  @if($image)
    <img src="{{ $image['sizes']['1536x1536'] }}" alt="{{ $image['alt'] }}">
  @endif
</div>