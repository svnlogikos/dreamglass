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
				<div class="col-md-8">
					<div class="col-md-3">
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
					<div class="col-md-3">
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
					<div class="col-md-3">
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
					<div class="col-md-3">
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
				<div class="col-md-4">
					<div class="container-img">
						<img src="<?php echo get_template_directory_uri(); ?>/images/image-footer.png" alt="">
					</div>
					
				</div>
		
			</div>
		</div>
		<div class="container">
			<div class="row divider-footer">
				<img src="<?php echo get_template_directory_uri(); ?>/images/divider.png" alt="">
			</div>
		</div>
		<div class="container">
			<div class="row">
		
				<div class="col-md-4">
					<span class="footertitle">CONNECT WITH DREAMGLASS:</span>
					<div class="container-social-icons">
						<img class="social-icons" src="<?php echo get_template_directory_uri(); ?>/images/social/facebook.png" alt="Facebook">
						<img class="social-icons" src="<?php echo get_template_directory_uri(); ?>/images/social/googleplus.png" alt="Google Plus">
						<img class="social-icons" src="<?php echo get_template_directory_uri(); ?>/images/social/youtube.png" alt="Youtube">
						<img class="social-icons" src="<?php echo get_template_directory_uri(); ?>/images/social/twitter.png" alt="Twitter">
						<img class="social-icons" src="<?php echo get_template_directory_uri(); ?>/images/social/pinterest.png" alt="Pinterest">
						<img class="social-icons" src="<?php echo get_template_directory_uri(); ?>/images/social/linkedin.png" alt="Linkedin">
						<img class="social-icons" src="<?php echo get_template_directory_uri(); ?>/images/social/instagram.png" alt="Instagram">
					</div>
					
				</div>
				<div class="col-md-8">
					<div class="col-md-4">
						<span class="footertitle">GET IN TOUCH:</span>
						<div class="footertext">
							<div class="izq"><img class="borde" src="<?php echo get_template_directory_uri(); ?>/images/direccion.png"></div>
							<div class="der">Calle Cañada 15.<br> Paracuellos de Jarama, Madrid</div>
							
						</div>
					</div>
					<div class="col-md-4 container-telefono">
						<div class="footertext">
							<div class="izq"><img class="borde" src="<?php echo get_template_directory_uri(); ?>/images/telefono.png"></div>
							<div class="der telefono">+34 91 658 4245</div>
							
						</div>
					</div>
					<div class="col-md-4">
						<div class="footertextblue">click here to see all our global offices</div>
						<div class="footertext">
							<div class="izq"><img class="borde" src="<?php echo get_template_directory_uri(); ?>/images/correo.png"></div>
							<div class="der telefono">info@dreamglassgroup.com</div>
							
						</div>
					</div>
				</div>
		
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
