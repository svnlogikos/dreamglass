<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package Rocked
 */
?>

			</div>
		</div>
	</div>

	<?php if ( is_active_sidebar( 'footer-1' ) ) : ?>
		<?php get_sidebar('footer'); ?>
	<?php endif; ?>
	<div class="prefooter">
		<div class="container">
			<div class="row prefooter-content">
				<div class="col-sm-12 col-md-8">
					<div class="col-sm-12 col-md-3">
						<ul class="footer-ul">
							<li class="footer-ul-title">HOME</li>
							<li>Blog & News</li>
							<li>Contact Us</li>
							<li>Get a Quote</li>
						</ul>
						<br>
						<ul class="footer-ul">
							<li class="footer-ul-title">RESOURCES</li>
							<li>Images & Videos</li>
							<li>Technology</li>
							<li>How it Works</li>
							<li>Glass Types</li>
						</ul>
					</div>
					<div class="col-sm-12 col-md-3">
						<ul class="footer-ul">
							<li class="footer-ul-title">PRODUCTS</li>
							<li>Original</li>
							<li>Smart Blinds</li>
							<li>IR Shield</li>
							<li>Dynamic Shutter</li>
							<li>Original</li>
							<li>Matrix</li>
							<li>DSAF</li>
						</ul>
					</div>
					<div class="col-sm-12 col-md-3">
						<ul class="footer-ul">
							<li class="footer-ul-title">SECTORS</li>
							<li>Commercial</li>
							<li>Residential</li>
							<li>Hotel</li>
							<li>Healthcare</li>
							<li>Education</li>
							<li>Transportation</li>
							<li>Retail</li>
							<li>Entertaiment</li>
						</ul>
					</div>
					<div class="col-sm-12 col-md-3">
						<ul class="footer-ul">
							<li class="footer-ul-title">ABOUT US</li>
							<li>Lab Technology</li>
							<li>Company</li>
							<li>Certifications</li>
							<li>Events</li>
							<li>FAQ</li>
							<li>Our Warranties</li>
							<li>Career</li>
							<li>Our Clients</li>
						</ul>
					</div>
				</div>
				<div class="col-sm-12 col-md-4">
					<div class="container-img">
						<img src="<?php echo get_template_directory_uri(); ?>/images/image-footer.png" alt="">
					</div>
					
				</div>
		
			</div>
		</div>
		<div class="container">
			<div class="row">
				<img src="<?php echo get_template_directory_uri(); ?>/images/divider.png" alt="">
			</div>
		</div>
			
	</div>
	<footer id="colophon" class="site-footer" role="contentinfo">
		
		<div class="site-info container">
			<span>Dream Glass Group, 2017 - All rights reserved.</span>
			<span class="sep"> | </span>
			<span>Privaty Policy</span>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->
<a class="go-top">
	<i class="fa fa-angle-up"></i>
</a>

<?php wp_footer(); ?>

</body>
</html>
