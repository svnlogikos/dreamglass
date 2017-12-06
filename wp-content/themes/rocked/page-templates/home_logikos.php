<?php

/*

Template Name: Inicio

*/
	get_header();
?>


	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'template-parts/content', 'page' ); ?>

			<?php endwhile; // end of the loop. ?>


		</main><!-- #main -->
		<?php get_template_part( 'template-parts/content', 'app' ); ?>
	</div><!-- #primary -->
	
<?php get_footer(); ?>