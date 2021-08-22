@php
  $artist = $footerartist;
@endphp

<footer class="footer" @if($artist) style="background-color: {{ $artist['fields']['couleur'] }}; @if($artist['fields']['couleur_texte']) color: {{ $artist['fields']['couleur_texte'] }}; @endif" @endif>
  <div class="container">
    @if($artist)
      <div class="artist">
        <img src="{{ $artist['fields']['oeuvre']['sizes']['medium'] }}" alt="{{ $artist['fields']['oeuvre']['alt'] ? $artist['fields']['oeuvre']['alt'] : $artist['fields']['titre'] }}">
        <div class="infos">
          <div class="left">
            <div class="name">
              {{ $artist['title'] }}
            </div>
            <div class="label">
              {{ __('Artiste','maisonalcan') }}
            </div>
          </div>
          <div class="title">
            {{ $artist['fields']['titre'] }}
          </div>
        </div>
        <div class="mission">
          {{ $footermission }}
        </div>
      </div>
    @endif
  </div>
</footer>