<?php

namespace App\Controllers;

use Sober\Controller\Controller;

class TemplateResidents extends Controller
{
    public function residents()
    {
        $args = array(
            'post_type' => 'residents',
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'orderby' => 'menu_order',
        );

        $the_query = new \WP_Query($args);
        $postsList = array();
        while ($the_query->have_posts()) {
            $the_query->the_post();
            array_push($postsList, get_post());
        }

        return $postsList;
    }
}
