<header class="header" data-scroll>
  <div class="container">
    <a href="{{ home_url('/') }}" class="logo">
      @if($logo)
        <img src="{{ $logo['sizes']['medium'] }}" alt="{{ $logo['alt'] }}">
      @else
        {{ $siteName }}
      @endif
    </a>
    <div class="nav-wrapper">
      <div class="nav-inner">
        <nav class="nav-primary">
          @if (has_nav_menu('primary_navigation'))
            {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'container' => '']) !!}
          @endif
          <a class="header__lang" href="{{ $language[ICL_LANGUAGE_CODE == 'en' ? 'fr' : 'en']['url'] }}">
            {{ ICL_LANGUAGE_CODE == 'en' ? 'FR' : 'EN' }}
          </a>
        </nav>
        <div class="desc">
          @if($footeraddress)
            {!! $footeraddress !!}
          @endif
          @if($footeremail)
            <p>
              <a href="mailto:{{ $footeremail }}">{{ $footeremail }}</a>
            </p>
          @endif
        </div>
      </div>
    </div>
    <a class="menu-toggle">
      <div class="open">{{ __('Menu', 'maisonalcan') }}</div>
      <div class="close">{{ __('Fermer', 'maisonalcan') }}</div>
    </a>
  </div>
</header>
<div class="header-spacer"></div>