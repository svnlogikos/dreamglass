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
				<div id="footer_menu_desktop" class="col-md-8">
					<div class="col-md-3">
						<ul class="footer-ul">
							<li class="footer-ul-title">HOME</li>
							<a class="links-footer" href="#"><li>Blog & News</li></a>
							<a class="links-footer" href="#"><li>Contact Us</li></a>
							<a class="links-footer" href="#"><li>Get a Quote</li></a>
						</ul>
						<br>
						<ul class="footer-ul">
							<li class="footer-ul-title">RESOURCES</li>
							<a class="links-footer" href="#"><li>Images & Videos</li></a>
							<a class="links-footer" href="#"><li>Technology</li></a>
							<a class="links-footer" href="#"><li>How it Works</li></a>
							<a class="links-footer" href="#"><li>Glass Types</li></a>
						</ul>
					</div>
					<div class="col-md-3">
						<ul class="footer-ul">
							<li class="footer-ul-title">PRODUCTS</li>
							<a class="links-footer" href="#"><li>Original</li></a>
							<a class="links-footer" href="#"><li>Smart Blinds</li></a>
							<a class="links-footer" href="#"><li>IR Shield</li></a>
							<a class="links-footer" href="#"><li>Dynamic Shutter</li></a>
							<a class="links-footer" href="#"><li>Original</li></a>
							<a class="links-footer" href="#"><li>Matrix</li></a>
							<a class="links-footer" href="#"><li>DSAF</li></a>
						</ul>
					</div>
					<div class="col-md-3">
						<ul class="footer-ul">
							<li class="footer-ul-title">SECTORS</li>
							<a class="links-footer" href="#"><li>Commercial</li></a>
							<a class="links-footer" href="#"><li>Residential</li></a>
							<a class="links-footer" href="#"><li>Hotel</li></a>
							<a class="links-footer" href="#"><li>Healthcare</li></a>
							<a class="links-footer" href="#"><li>Education</li></a>
							<a class="links-footer" href="#"><li>Transportation</li></a>
							<a class="links-footer" href="#"><li>Retail</li></a>
							<a class="links-footer" href="#"><li>Entertaiment</li></a>
						</ul>
					</div>
					<div class="col-md-3">
						<ul class="footer-ul">
							<li class="footer-ul-title">ABOUT US</li>
							<a class="links-footer" href="#"><li>Lab Technology</li></a>
							<a class="links-footer" href="#"><li>Company</li></a>
							<a class="links-footer" href="#"><li>Certifications</li></a>
							<a class="links-footer" href="#"><li>Events</li></a>
							<a class="links-footer" href="#"><li>FAQ</li></a>
							<a class="links-footer" href="#"><li>Our Warranties</li></a>
							<a class="links-footer" href="#"><li>Career</li></a>
							<a class="links-footer" href="#"><li>Our Clients</li></a>
						</ul>
					</div>
				</div>
				<div class="col-md-4 container-img">
					<img src="<?php echo get_template_directory_uri(); ?>/images/image-footer.png" alt="">
					
					
				</div>
				<?php get_template_part( 'template-parts/content', 'menu-mobile' ); ?>
			</div>
		</div>
		<div class="container">
			<div class="row divider-footer">
				<img src="<?php echo get_template_directory_uri(); ?>/images/divider.png" alt="">
			</div>
		</div>
		<div class="container">
			<div class="row">
		
				<div class="col-xs-12 col-md-4">
					<span class="footertitle mobile_margen">CONNECT WITH DREAMGLASS:</span>
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
				<div class="container mobile_divider">
					<div class="row divider-footer">
						<img src="<?php echo get_template_directory_uri(); ?>/images/divider.png" alt="">
					</div>
				</div>
				<div class="col-xs-12 col-md-8">
					<div class="col-xs-12 col-md-4">
						<span class="footertitle">GET IN TOUCH:</span>
						<div class="footertext">
							<div class="izq"><img class="borde" src="<?php echo get_template_directory_uri(); ?>/images/direccion.png"></div>
							<div class="der">Calle Cañada 15.<br> Paracuellos de Jarama, Madrid</div>
							
						</div>
					</div>
					<div class="col-xs-12 col-md-4 container-telefono">
						<div class="footertext">
							<div class="izq"><img class="borde" src="<?php echo get_template_directory_uri(); ?>/images/telefono.png"></div>
							<div class="der telefono">+34 91 658 4245</div>
							
						</div>
					</div>
					<div class="col-xs-12 col-md-4">
						<div class="footertextblue"><a class="footertextblue" href="">click here to see all our global offices</a></div>
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
