

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<body <?php body_class(); ?>>



    <header>
  <a href="<?php echo home_url('/'); ?>"><img src="<?php bloginfo('template_directory'); ?>/images/logo.png" alt="Logo" class="logo"></a>
  <nav>
      <ul>
          <li><a href="<?php echo home_url(); ?>">Home</a></li>
          <li><a href="<?php echo home_url('/contact'); ?>">Contact</a></li>
          <li><a href="<?php echo home_url('/about'); ?>">About</a></li>
          <li><a href="<?php echo home_url('/portfolio'); ?>">Portfolio</a></li>
      </ul>
  </nav>
</header>




  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?php bloginfo('name'); ?> - <?php bloginfo('description'); ?></title>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  
<?php get_footer(); ?>
