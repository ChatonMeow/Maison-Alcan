<div class="marquee__wrapper">
  <div class="marquee">
    @for ($i = 1; $i < 6; $i++)
      <div class="marquee__inner">
        {{ $text }}
      </div>
    @endfor
  </div>
</div>