<?php

namespace App;

use Roots\Sage\Container;
use Roots\Sage\Assets\JsonManifest;
use Roots\Sage\Template\Blade;
use Roots\Sage\Template\BladeProvider;

/**
 * Theme assets
 */
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('aktiv-grotesk', 'https://use.typekit.net/ouz7pur.css', false, null);
    wp_enqueue_style('sage/main.css', asset_path('styles/main.css'), false, null);
    wp_enqueue_script('lottie', 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.7.13/lottie.min.js', [], null, true);
    wp_enqueue_style('LocomotiveScrollCSS', 'https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.1/dist/locomotive-scroll.min.css');
    wp_enqueue_script('LocomotiveScroll', 'https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.1/dist/locomotive-scroll.min.js', [], null, true);
    wp_enqueue_style('SwiperCSS', 'https://unpkg.com/swiper@7/swiper-bundle.min.css');
    wp_enqueue_script('Swiper', 'https://unpkg.com/swiper@7/swiper-bundle.min.js', [], null, true);
    wp_enqueue_script('sage/main.js', asset_path('scripts/main.js'), ['jquery', 'lottie', 'LocomotiveScroll'], null, true);

    if (is_single() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}, 100);

/**
 * Theme setup
 */
add_action('after_setup_theme', function () {
    /**
     * Enable features from Soil when plugin is activated
     * @link https://roots.io/plugins/soil/
     */
    add_theme_support('soil-clean-up');
    add_theme_support('soil-jquery-cdn');
    add_theme_support('soil-nav-walker');
    add_theme_support('soil-nice-search');
    add_theme_support('soil-relative-urls');

    /**
     * Enable plugins to manage the document title
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#title-tag
     */
    add_theme_support('title-tag');

    /**
     * Register navigation menus
     * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
     */
    register_nav_menus([
        'primary_navigation' => __('Primary Navigation', 'sage'),
        'footer' => __('Footer', 'sage')
    ]);

    /**
     * Enable post thumbnails
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support('post-thumbnails');

    /**
     * Enable HTML5 markup support
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#html5
     */
    add_theme_support('html5', ['caption', 'comment-form', 'comment-list', 'gallery', 'search-form']);

    /**
     * Enable selective refresh for widgets in customizer
     * @link https://developer.wordpress.org/themes/advanced-topics/customizer-api/#theme-support-in-sidebars
     */
    add_theme_support('customize-selective-refresh-widgets');

    /**
     * Use main stylesheet for visual editor
     * @see resources/assets/styles/layouts/_tinymce.scss
     */
    add_editor_style(asset_path('styles/main.css'));
}, 20);

/**
 * Register sidebars
 */
add_action('widgets_init', function () {
    $config = [
        'before_widget' => '<section class="widget %1$s %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3>',
        'after_title'   => '</h3>'
    ];
    /*register_sidebar([
        'name'          => __('Primary', 'sage'),
        'id'            => 'sidebar-primary'
    ] + $config);*/
});

/**
 * Updates the `$post` variable on each iteration of the loop.
 * Note: updated value is only available for subsequently loaded views, such as partials
 */
add_action('the_post', function ($post) {
    sage('blade')->share('post', $post);
});

/**
 * Setup Sage options
 */
add_action('after_setup_theme', function () {
    /**
     * Add JsonManifest to Sage container
     */
    sage()->singleton('sage.assets', function () {
        return new JsonManifest(config('assets.manifest'), config('assets.uri'));
    });

    /**
     * Add Blade to Sage container
     */
    sage()->singleton('sage.blade', function (Container $app) {
        $cachePath = config('view.compiled');
        if (!file_exists($cachePath)) {
            wp_mkdir_p($cachePath);
        }
        (new BladeProvider($app))->register();
        return new Blade($app['view']);
    });

    /**
     * Create @asset() Blade directive
     */
    sage('blade')->compiler()->directive('asset', function ($asset) {
        return "<?= " . __NAMESPACE__ . "\\asset_path({$asset}); ?>";
    });
});

// Add ACF options page
if (function_exists('acf_add_options_page')) {
    acf_add_options_page([
        'page_title' => 'Global',
        'autoload' => true
    ]);
}

// Add custom post types
add_action('init', function () {
    register_post_type('artists', [
        'labels' => [
            'name' => __('Artistes', 'maisonalcan'),
            'singular_name' => __('artiste', 'maisonalcan'),
            'all_items' => __('Tous les artistes', 'maisonalcan'),
            'add_new' => __('Ajouter artiste', 'maisonalcan'),
            'add_new_item' => __('Ajouter artiste', 'maisonalcan'),
            'edit' => __('Modifier artiste', 'maisonalcan'),
            'edit_item' => __('Modifier artiste', 'maisonalcan'),
            'new_item' => __('Nouveau artiste', 'maisonalcan'),
            'view_item' => __('Voir artiste', 'maisonalcan'),
            'search_items' => __('Recherche artiste', 'maisonalcan'),
            'not_found' =>  __('Aucun résultat dans la base de données', 'maisonalcan'),
            'not_found_in_trash' => __('Aucun résultat dans la poubelle', 'maisonalcan'),
            'parent_item_colon' => ''
        ],
        'description' => __('Répertoire des artistes', 'maisonalcan'),
        'public' => true,
        'publicly_queryable' => false,
        'exclude_from_search' => false,
        'show_ui' => true,
        'query_var' => true,
        'menu_position' => 5,
        'menu_icon' => 'dashicons-art',
        'capability_type' => 'post',
        'hierarchical' => false,
        'supports' => ['title', 'custom-fields', 'thumbnail']
    ]);

    register_post_type('residents', [
        'labels' => [
            'name' => __('Résidents', 'maisonalcan'),
            'singular_name' => __('resident', 'maisonalcan'),
            'all_items' => __('Tous les résidents', 'maisonalcan'),
            'add_new' => __('Ajouter résident', 'maisonalcan'),
            'add_new_item' => __('Ajouter resident', 'maisonalcan'),
            'edit' => __('Modifier resident', 'maisonalcan'),
            'edit_item' => __('Modifier resident', 'maisonalcan'),
            'new_item' => __('Nouveauresident', 'maisonalcan'),
            'view_item' => __('Voirresident', 'maisonalcan'),
            'search_items' => __('Recherche resident', 'maisonalcan'),
            'not_found' =>  __('Aucun résultat dans la base de données', 'maisonalcan'),
            'not_found_in_trash' => __('Aucun résultat dans la poubelle', 'maisonalcan'),
            'parent_item_colon' => ''
        ],
        'description' => __('Répertoire des residents', 'maisonalcan'),
        'public' => true,
        'publicly_queryable' => false,
        'exclude_from_search' => false,
        'show_ui' => true,
        'query_var' => true,
        'menu_position' => 5,
        'menu_icon' => 'dashicons-building',
        'capability_type' => 'post',
        'hierarchical' => false,
        'supports' => ['title', 'custom-fields', 'thumbnail']
    ]);
});

// ************* Remove default Posts type since no blog *************
// Remove side menu
add_action('admin_menu', function () {
    remove_menu_page('edit.php');
});
// Remove Quick Draft Dashboard Widget
add_action('wp_dashboard_setup', function () {
    remove_meta_box('dashboard_quick_press', 'dashboard', 'side');
}, 999);
// End remove post type