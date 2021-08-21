<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class App extends Controller
{
    public function siteName()
    {
        return get_bloginfo('name');
    }

    public static function title()
    {
        if (is_home()) {
            if ($home = get_option('page_for_posts', true)) {
                return get_the_title($home);
            }
            return __('Latest Posts', 'sage');
        }
        if (is_archive()) {
            return get_the_archive_title();
        }
        if (is_search()) {
            return sprintf(__('Search Results for %s', 'sage'), get_search_query());
        }
        if (is_404()) {
            return __('Not Found', 'sage');
        }
        return get_the_title();
    }

    public function pageslug()
    {
        global $post;
        return $post->post_name;
    }

    public function logo()
    {
        return get_field('logo', 'option');
    }

    public function language()
    {
        $languages = apply_filters('wpml_active_languages', NULL);
        return array_map(function ($language) {
            return [
                'language' => ucwords($language['native_name']),
                'url' => $language['url'],
            ];
        }, $languages);
    }

    public function footerartist()
    {
        return get_field('pied_page_defaut');
    }
}
