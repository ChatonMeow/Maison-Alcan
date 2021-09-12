<div class="espace type-{{ $type }}">
  @if($title)
    <h3 class="title">
      {{ $title }}
    </h3>
  @endif
  @if($icon)
    <img src="{{ $icon['sizes']['thumbnail'] }}" alt="{{ $icon['alt'] ? $icon['alt'] : $title }}" class="icon">
  @endif
  @if($image)
    <img src="{{ $image['sizes']['large'] }}" alt="{{ $image['alt'] }}" class="image">
  @endif
  @if($desc)
    <p class="desc">
      {{ $desc }}
    </p>
  @endif
</div>