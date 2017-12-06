<?php
/**
 * @package Rocked
 */
?>

	
		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			<div class="post-content">
				<?php if ( has_post_thumbnail() && ( get_theme_mod( 'post_feat_image' ) != 1 ) ) : ?>
					<div class="entry-thumb">
						<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title( '<h3 class="titles_img_sectors">', '</h3>' ); ?></a>
						<div class="opacidad_img"><?php the_post_thumbnail('rocked-large-thumb'); ?></div>
					</div>
				<?php endif; ?>
				<div class="entry-content">
					<?php the_content(); ?>
				</div><!-- .entry-content -->
			</div>
		</article><!-- #post-## -->
	
