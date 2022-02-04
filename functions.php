<?php

add_action( 'send_headers', 'tgm_io_strict_transport_security' );
function tgm_io_strict_transport_security() {
    //header('X-Frame-Options: SAMEORIGIN');
    // header('X-XSS-Protection: 1; mode=block');
    // header('X-Content-Type-Options: nosniff');
    // header( 'Strict-Transport-Security: max-age=10886400; includeSubDomains; preload' );
}

add_action('wp_head', 'insert_header');
function insert_header() {
}

add_action( 'wp_footer', 'scripts_footer' , 50);
function scripts_footer(){
}

add_action( 'wp_enqueue_scripts', 'custom_scripts' , 50);
function custom_scripts() {
    wp_enqueue_style( 'main-css', get_stylesheet_directory_uri() . '/style.css' );
    wp_enqueue_script( 'chic-main-js', get_stylesheet_directory_uri() . '/assets/js/chic-main.js' );
}



