@php $artist = $footerartist @endphp

<footer class="footer" @if($artist) style="background-color: {{ $artist['fields']['couleur'] }}; @if($artist['fields']['couleur_texte']) color: {{ $artist['fields']['couleur_texte'] }}; @endif" @endif>
  <div class="top">
    <div class="container">
      <div class="left">
        @if($artist)
          <div class="img-wrapper">
            <img src="{{ $artist['fields']['oeuvre']['sizes']['medium'] }}" alt="{{ $artist['fields']['oeuvre']['alt'] ? $artist['fields']['oeuvre']['alt'] : $artist['fields']['titre'] }}">
          </div>
          <div class="infos">
            <div class="left">
              <div class="artist">
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
        @endif
        <div class="mission">
          {{ $footermission }}
        </div>
      </div>
      <div class="right">
        @if (has_nav_menu('primary_navigation'))
          {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'container' => '']) !!}
        @endif
        <div class="bot">
          <div class="contact">
            @if($footeraddress)
              <div class="address">
                {!! $footeraddress !!}
              </div>
            @endif
            @if($footeremail)
              <a href="mailto:{{ $footeremail }}">{{ $footeremail }}</a>
            @endif
          </div>
          @if($logo)
            <img src="{{ $logo['sizes']['medium'] }}" alt="{{ $logo['alt'] }}">
          @endif
        </div>
      </div>
    </div>
  </div>
  <div class="copy">
    <div class="container">
      <span>
        © {{ date("Y") }} {{ $site_name }}
      </span>
      {!! wp_nav_menu(['theme_location' => 'footer', 'container' => '']) !!}
    </div>
  </div>
</footer>