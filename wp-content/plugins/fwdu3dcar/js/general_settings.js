jQuery(document).ready(function($)
{
	var DEFAULT_SKINS_NR = 3;
	
	var cur_settings_obj;
	
	$("#tabs").tabs();
	
	$("#cov_bg_color").spectrum(
	{
  	    color: "#DDDDDD",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
	
	// carousel bg image custom uploader
	var cov_bg_custom_uploader;
    
    $("#cov_bg_image_btn").click(function(e)
    {
        e.preventDefault();
 
        //If the uploader object has already been created, reopen the dialog
        if (cov_bg_custom_uploader)
        {
        	cov_bg_custom_uploader.open();
            return;
        }
        
        //Extend the wp.media object
        cov_bg_custom_uploader = wp.media.frames.file_frame = wp.media(
        {
            title: "Choose Image",
            button:
            {
                text: "Add Image"
            },
            library:
            {
            	type: "image"
            },
            multiple: false
        });
 
        //When a file is selected, grab the URL and set it as the text field's value
        cov_bg_custom_uploader.on("select", function()
        {
            attachment = cov_bg_custom_uploader.state().get("selection").first().toJSON();
            
            $("#cov_bg_image_url").val(attachment.url);
            $("#cov_bg_upload_img").attr("src", attachment.url);
        });
 
        //Open the uploader dialog
        cov_bg_custom_uploader.open();
    });
    
    // thumbs bg image custom uploader
	var thumbs_bg_custom_uploader;
    
    $("#thumbs_bg_image_btn").click(function(e)
    {
        e.preventDefault();
 
        //If the uploader object has already been created, reopen the dialog
        if (thumbs_bg_custom_uploader)
        {
        	thumbs_bg_custom_uploader.open();
            return;
        }
        
        //Extend the wp.media object
        thumbs_bg_custom_uploader = wp.media.frames.file_frame = wp.media(
        {
            title: "Choose Image",
            button:
            {
                text: "Add Image"
            },
            library:
            {
            	type: "image"
            },
            multiple: false
        });
 
        //When a file is selected, grab the URL and set it as the text field's value
        thumbs_bg_custom_uploader.on("select", function()
        {
            attachment = thumbs_bg_custom_uploader.state().get("selection").first().toJSON();
            
            $("#thumbs_bg_image_url").val(attachment.url);
            $("#thumbs_bg_upload_img").attr("src", attachment.url);
        });
 
        //Open the uploader dialog
        thumbs_bg_custom_uploader.open();
    });
    
    // scrollbar bg image custom uploader
	var scrollbar_bg_custom_uploader;
    
    $("#scrollbar_bg_image_btn").click(function(e)
    {
        e.preventDefault();
 
        //If the uploader object has already been created, reopen the dialog
        if (scrollbar_bg_custom_uploader)
        {
        	scrollbar_bg_custom_uploader.open();
            return;
        }
        
        //Extend the wp.media object
        scrollbar_bg_custom_uploader = wp.media.frames.file_frame = wp.media(
        {
            title: "Choose Image",
            button:
            {
                text: "Add Image"
            },
            library:
            {
            	type: "image"
            },
            multiple: false
        });
 
        //When a file is selected, grab the URL and set it as the text field's value
        scrollbar_bg_custom_uploader.on("select", function()
        {
            attachment = scrollbar_bg_custom_uploader.state().get("selection").first().toJSON();
            
            $("#scrollbar_bg_image_url").val(attachment.url);
            $("#scrollbar_bg_upload_img").attr("src", attachment.url);
        });
 
        //Open the uploader dialog
        scrollbar_bg_custom_uploader.open();
    });
    
    // carousel center image custom uploader
	var center_img_custom_uploader;
    
    $("#center_image_btn").click(function(e)
    {
        e.preventDefault();
 
        //If the uploader object has already been created, reopen the dialog
        if (center_img_custom_uploader)
        {
        	center_img_custom_uploader.open();
            return;
        }
        
        //Extend the wp.media object
        center_img_custom_uploader = wp.media.frames.file_frame = wp.media(
        {
            title: "Choose Image",
            button:
            {
                text: "Add Image"
            },
            library:
            {
            	type: "image"
            },
            multiple: false
        });
 
        //When a file is selected, grab the URL and set it as the text field's value
        center_img_custom_uploader.on("select", function()
        {
            attachment = center_img_custom_uploader.state().get("selection").first().toJSON();
            
            $("#center_image_url").val(attachment.url);
            $("#center_upload_img").attr("src", attachment.url);
        });
 
        //Open the uploader dialog
        center_img_custom_uploader.open();
    });
    
    $("#thumb_bg_color").spectrum(
	{
  	    color: "#666666",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#thumb_border_color1").spectrum(
	{
  	    color: "#FCFDFD",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#thumb_border_color2").spectrum(
	{
  	    color: "#E4E4E4",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#text_bg_color").spectrum(
	{
  	    color: "#333333",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#timer_color").spectrum(
	{
  	    color: "#777777",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#scrollbar_text_normal_color").spectrum(
	{
  	    color: "#777777",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#scrollbar_text_selected_color").spectrum(
	{
  	    color: "#777777",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#selector_bg_normal_color1").spectrum(
	{
  	    color: "#FCFDFD",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#selector_bg_normal_color2").spectrum(
	{
  	    color: "#E4E4E4",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#selector_bg_selected_color1").spectrum(
	{
  	    color: "#A7A7A7",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#selector_bg_selected_color2").spectrum(
	{
  	    color: "#8E8E8E",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#selector_text_normal_color").spectrum(
	{
  	    color: "#8B8B8B",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#selector_text_selected_color").spectrum(
	{
  	    color: "#FFFFFF",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#button_bg_normal_color1").spectrum(
	{
  	    color: "#E7E7E7",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#button_bg_normal_color2").spectrum(
	{
  	    color: "#E7E7E7",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#button_bg_selected_color1").spectrum(
	{
  	    color: "#A7A7A7",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#button_bg_selected_color2").spectrum(
	{
  	    color: "#8E8E8E",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#button_text_normal_color").spectrum(
	{
  	    color: "#000000",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#button_text_selected_color").spectrum(
	{
  	    color: "#FFFFFF",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#combobox_shadow_color").spectrum(
	{
  	    color: "#000000",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#lightbox_bg_color").spectrum(
	{
  	    color: "#000000",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#lightbox_info_bg_color").spectrum(
	{
  	    color: "#FFFFFF",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
   
    $("#item_border_color1").spectrum(
	{
  	    color: "#FCFDFD",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#item_border_color2").spectrum(
	{
  	    color: "#E4E4E4",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
    
    $("#lightbox_item_bg_color").spectrum(
	{
  	    color: "#333333",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
	
	$("#bullets_background_normal_color1").spectrum(
	{
  	    color: "#333333",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
	
	$("#bullets_background_normal_color2").spectrum(
	{
  	    color: "#333333",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
	
	$("#bullets_background_selected_color1").spectrum(
	{
  	    color: "#333333",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
	
	$("#bullets_background_selected_color2").spectrum(
	{
  	    color: "#333333",
  	  	chooseText: "Update",
  	  	showInitial: true,
  	  	showInput: true,
  	  	allowEmpty:true,
  	  	preferredFormat: "hex6"
  	});
	
	$("#light_box_background_color").spectrum({


  	    color: "#5a5a5a",


  	  	chooseText: "Update",


  	  	showInitial: true,


  	  	showInput: true,


  	  	allowEmpty:true,


  	  	preferredFormat: "hex6"


  	});


	


	$("#combo_box_shadow_color").spectrum({


  	    color: "#5a5a5a",


  	  	chooseText: "Update",


  	  	showInitial: true,


  	  	showInput: true,


  	  	allowEmpty:true,


  	  	preferredFormat: "hex6"


  	});


	


	$("#description_window_background_color").spectrum({


  	    color: "#5a5a5a",


  	  	chooseText: "Update",


  	  	showInitial: true,


  	  	showInput: true,


  	  	allowEmpty:true,


  	  	preferredFormat: "hex6"


  	});


	


	$("#video_poster_background_color").spectrum({


  	    color: "#5a5a5a",


  	  	chooseText: "Update",


  	  	showInitial: true,


  	  	showInput: true,


  	  	allowEmpty:true,


  	  	preferredFormat: "hex6"


  	});


	


	$("#video_controller_background_color").spectrum({


  	    color: "#5a5a5a",


  	  	chooseText: "Update",


  	  	showInitial: true,


  	  	showInput: true,


  	  	allowEmpty:true,


  	  	preferredFormat: "hex6"


  	});


	


	$("#audio_controller_background_color").spectrum({


  	    color: "#5a5a5a",


  	  	chooseText: "Update",


  	  	showInitial: true,


  	  	showInput: true,


  	  	allowEmpty:true,


  	  	preferredFormat: "hex6"


  	});
	
	$("#time_color").spectrum({


  	    color: "#5a5a5a",


  	  	chooseText: "Update",


  	  	showInitial: true,


  	  	showInput: true,


  	  	allowEmpty:true,


  	  	preferredFormat: "hex6"


  	});
	
	$("#item_background_color").spectrum({


  	    color: "#5a5a5a",


  	  	chooseText: "Update",


  	  	showInitial: true,


  	  	showInput: true,


  	  	allowEmpty:true,


  	  	preferredFormat: "hex6"


  	});
	
	
	
    
    $("#tabs").tooltip(
    {
        position:
        {
    		my: "center bottom-10",
    		at: "center top"
        }
    });

    function setSettings()
    {
    	var settings_obj = settingsAr[cur_order_id];
    	
    	// main settings
    	$("#name").val(settings_obj.name);
    	$("#display_type").val(settings_obj.display_type);
    	$("#autoscale").val(settings_obj.autoscale);
    	$("#cov_width").val(settings_obj.cov_width);
    	$("#cov_height").val(settings_obj.cov_height);
    	$("#skin_path").val(settings_obj.skin_path);
    	$("#cov_bg_color").spectrum("set", settings_obj.cov_bg_color != "transparent" ? settings_obj.cov_bg_color : null);
    	$("#cov_bg_image_url").val(settings_obj.cov_bg_image_url);
    	$("#cov_bg_upload_img").attr("src", settings_obj.cov_bg_image_url);
    	$("#thumbs_bg_image_url").val(settings_obj.thumbs_bg_image_url);
    	$("#thumbs_bg_upload_img").attr("src", settings_obj.thumbs_bg_image_url);
    	$("#scrollbar_bg_image_url").val(settings_obj.scrollbar_bg_image_url);
    	$("#scrollbar_bg_upload_img").attr("src", settings_obj.scrollbar_bg_image_url);
    	$("#bg_repeat").val(settings_obj.bg_repeat);
    	$("#car_topology").val(settings_obj.car_topology);
    	$("#car_x_radius").val(settings_obj.car_x_radius);
    	$("#car_y_radius").val(settings_obj.car_y_radius);
    	$("#car_x_rot").val(settings_obj.car_x_rot);
    	$("#car_y_offset").val(settings_obj.car_y_offset);
    	$("#show_center_image").val(settings_obj.show_center_image);
    	$("#center_image_url").val(settings_obj.center_image_url);
    	$("#center_upload_img").attr("src", settings_obj.center_image_url);
    	$("#center_image_y_offset").val(settings_obj.center_image_y_offset);
    	$("#show_2d_display").val(settings_obj.show_2d_display);
    	$("#cov_start_pos").val(settings_obj.cov_start_pos);
    	$("#cov_autoplay").val(settings_obj.cov_autoplay);
    	$("#cov_slideshow_delay").val(settings_obj.cov_slideshow_delay);
		$("#right_click_context_menu").val(settings_obj.right_click_context_menu);
    	$("#cov_keyboard_support").val(settings_obj.cov_keyboard_support);
    	$("#fluid_width_z_index").val(settings_obj.fluid_width_z_index);
		$("#show_large_next_and_prev_buttons").val(settings_obj.show_large_next_and_prev_buttons);
		$("#large_next_and_prev_buttons_offest").val(settings_obj.large_next_and_prev_buttons_offest);
		$("#use_drag_and_swipe").val(settings_obj.use_drag_and_swipe);
		
    	
    	// thumbs settings
    	$("#thumb_width").val(settings_obj.thumb_width);
    	$("#thumb_height").val(settings_obj.thumb_height);
    	$("#thumb_border_size").val(settings_obj.thumb_border_size);
    	$("#thumb_min_alpha").val(settings_obj.thumb_min_alpha);
    	$("#thumb_bg_color").spectrum("set", settings_obj.thumb_bg_color != "transparent" ? settings_obj.thumb_bg_color : null);
    	$("#thumb_border_color1").spectrum("set", settings_obj.thumb_border_color1 != "transparent" ? settings_obj.thumb_border_color1 : null);
    	$("#thumb_border_color2").spectrum("set", settings_obj.thumb_border_color2 != "transparent" ? settings_obj.thumb_border_color2 : null);
    	$("#transparent_images").val(settings_obj.transparent_images);
    	$("#max_thumbs_mobile").val(settings_obj.max_thumbs_mobile);
    	$("#show_thumbs_gradient").val(settings_obj.show_thumbs_gradient);
    	$("#show_thumbs_text").val(settings_obj.show_thumbs_text);
    	$("#text_bg_color").spectrum("set", settings_obj.text_bg_color != "transparent" ? settings_obj.text_bg_color : null);
    	$("#text_bg_opacity").val(settings_obj.text_bg_opacity);
    	$("#show_text_bg_image").val(settings_obj.show_text_bg_image);
    	$("#show_full_text_without_hover").val(settings_obj.show_full_text_without_hover);
    	$("#show_thumb_box_shadow").val(settings_obj.show_thumb_box_shadow);
    	$("#box_shadow_css").val(settings_obj.box_shadow_css);
    	$("#show_reflection").val(settings_obj.show_reflection);
    	$("#reflection_height").val(settings_obj.reflection_height);
    	$("#reflection_distance").val(settings_obj.reflection_distance);
    	$("#reflection_opacity").val(settings_obj.reflection_opacity);
    	
    	// controls settings
    	$("#controls_max_width").val(settings_obj.controls_max_width);
    	$("#controls_height").val(settings_obj.controls_height);
    	$("#controls_position").val(settings_obj.controls_position);
		$("#thumbnail_text_position").val(settings_obj.thumbnail_text_position);
		
    	$("#show_prev_btn").val(settings_obj.show_prev_btn);
    	$("#show_next_btn").val(settings_obj.show_next_btn);
    	$("#disable_btns_mobile").val(settings_obj.disable_btns_mobile);
    	$("#show_slideshow_btn").val(settings_obj.show_slideshow_btn);
    	$("#timer_color").spectrum("set", settings_obj.timer_color != "transparent" ? settings_obj.timer_color : null);
    	$("#show_scrollbar").val(settings_obj.show_scrollbar);
    	$("#scrollbar_handler_width").val(settings_obj.scrollbar_handler_width);
		$("#scrollbar_text_normal_color").spectrum("set", settings_obj.scrollbar_text_normal_color != "transparent" ? settings_obj.scrollbar_text_normal_color : null);
		$("#scrollbar_text_selected_color").spectrum("set", settings_obj.scrollbar_text_selected_color != "transparent" ? settings_obj.scrollbar_text_selected_color : null);
		
    	$("#disable_scrollbar_mobile").val(settings_obj.disable_scrollbar_mobile);
    	$("#enable_mouse_wheel").val(settings_obj.enable_mouse_wheel);
    	
    	// combobox settings
    	$("#show_combobox").val(settings_obj.show_combobox);
    	$("#start_category").val(settings_obj.start_category);
    	$("#select_label").val(settings_obj.select_label);
    	$("#all_cats_label").val(settings_obj.all_cats_label);
    	$("#show_all_cats").val(settings_obj.show_all_cats);
    	$("#combobox_pos").val(settings_obj.combobox_pos);
    	$("#selector_bg_normal_color1").spectrum("set", settings_obj.selector_bg_normal_color1 != "transparent" ? settings_obj.selector_bg_normal_color1 : null);
    	$("#selector_bg_normal_color2").spectrum("set", settings_obj.selector_bg_normal_color2 != "transparent" ? settings_obj.selector_bg_normal_color2 : null);
    	$("#selector_bg_selected_color1").spectrum("set", settings_obj.selector_bg_selected_color1 != "transparent" ? settings_obj.selector_bg_selected_color1 : null);
    	$("#selector_bg_selected_color2").spectrum("set", settings_obj.selector_bg_selected_color2 != "transparent" ? settings_obj.selector_bg_selected_color2 : null);
    	$("#selector_text_normal_color").spectrum("set", settings_obj.selector_text_normal_color != "transparent" ? settings_obj.selector_text_normal_color : null);
    	$("#selector_text_selected_color").spectrum("set", settings_obj.selector_text_selected_color != "transparent" ? settings_obj.selector_text_selected_color : null);
    	$("#button_bg_normal_color1").spectrum("set", settings_obj.button_bg_normal_color1 != "transparent" ? settings_obj.button_bg_normal_color1 : null);
    	$("#button_bg_normal_color2").spectrum("set", settings_obj.button_bg_normal_color2 != "transparent" ? settings_obj.button_bg_normal_color2 : null);
    	$("#button_bg_selected_color1").spectrum("set", settings_obj.button_bg_selected_color1 != "transparent" ? settings_obj.button_bg_selected_color1 : null);
    	$("#button_bg_selected_color2").spectrum("set", settings_obj.button_bg_selected_color2 != "transparent" ? settings_obj.button_bg_selected_color2 : null);
    	$("#button_text_normal_color").spectrum("set", settings_obj.button_text_normal_color != "transparent" ? settings_obj.button_text_normal_color : null);
    	$("#button_text_selected_color").spectrum("set", settings_obj.button_text_selected_color != "transparent" ? settings_obj.button_text_selected_color : null);
    	$("#combobox_shadow_color").spectrum("set", settings_obj.combobox_shadow_color != "transparent" ? settings_obj.combobox_shadow_color : null);
    	$("#combobox_horizontal_margins").val(settings_obj.combobox_horizontal_margins);
    	$("#combobox_vertical_margins").val(settings_obj.combobox_vertical_margins);
    	$("#combobox_corner_radius").val(settings_obj.combobox_corner_radius);
    	
    	
    	//lightbox settings
		$("#buttons_alignment").val(settings_obj.buttons_alignment);
		$("#item_box_shadow").val(settings_obj.item_box_shadow);
		$("#description_window_position").val(settings_obj.description_window_position);
		$("#description_window_animation_type").val(settings_obj.description_window_animation_type);
		$("#slide_show_auto_play").val(settings_obj.slide_show_auto_play);
		$("#add_keyboard_support").val(settings_obj.add_keyboard_support);
		$("#show_close_button").val(settings_obj.show_close_button);
		$("#show_share_button").val(settings_obj.show_share_button);
		$("#show_zoom_button").val(settings_obj.show_zoom_button);
		$("#show_slide_show_button").val(settings_obj.show_slide_show_button);
		$("#show_slide_show_animation").val(settings_obj.show_slide_show_animation);
		$("#show_next_and_prev_buttons").val(settings_obj.show_next_and_prev_buttons);
		$("#show_next_and_prev_buttons_on_mobile").val(settings_obj.show_next_and_prev_buttons_on_mobile);
		$("#show_description_button").val(settings_obj.show_description_button);
		$("#show_description_by_default").val(settings_obj.show_description_by_default);
		$("#video_show_full_screen_button").val(settings_obj.video_show_full_screen_button);
		$("#video_auto_play").val(settings_obj.video_auto_play);
		$("#next_video_or_audio_auto_play").val(settings_obj.next_video_or_audio_auto_play);
		$("#video_loop").val(settings_obj.video_loop);
		$("#audio_auto_play").val(settings_obj.audio_auto_play);
		$("#audio_loop").val(settings_obj.audio_loop);
		$("#background_opacity").val(settings_obj.background_opacity);
		$("#description_window_background_opacity").val(settings_obj.description_window_background_opacity);
		$("#buttons_hide_delay").val(settings_obj.buttons_hide_delay);
		$("#slide_show_delay").val(settings_obj.slide_show_delay);
		$("#default_item_width").val(settings_obj.default_item_width);
		$("#default_item_height").val(settings_obj.default_item_height);
		$("#item_offset_height").val(settings_obj.item_offset_height);
		$("#space_between_buttons").val(settings_obj.space_between_buttons);
		$("#buttons_offset_in").val(settings_obj.buttons_offset_in);
		$("#buttons_offset_out").val(settings_obj.buttons_offset_out);
		$("#item_border_size").val(settings_obj.item_border_size);
		$("#item_border_radius").val(settings_obj.item_border_radius);
		$("#light_box_background_color").spectrum("set", settings_obj.light_box_background_color != "transparent" ? settings_obj.light_box_background_color : null);
		$("#description_window_background_color").spectrum("set", settings_obj.description_window_background_color != "transparent" ? settings_obj.description_window_background_color : null);
		$("#video_poster_background_color").spectrum("set", settings_obj.video_poster_background_color != "transparent" ? settings_obj.video_poster_background_color : null);
		$("#video_controller_background_color").spectrum("set", settings_obj.video_controller_background_color != "transparent" ? settings_obj.video_controller_background_color : null);
		$("#audio_controller_background_color").spectrum("set", settings_obj.audio_controller_background_color != "transparent" ? settings_obj.audio_controller_background_color : null);
		$("#time_color").spectrum("set", settings_obj.time_color != "transparent" ? settings_obj.time_color : null);
		$("#item_background_color").spectrum("set", settings_obj.item_background_color != "transparent" ? settings_obj.item_background_color : null);
		$("#item_border_color1").spectrum("set", settings_obj.item_border_color1 != "transparent" ? settings_obj.item_border_color1 : null);
		$("#item_border_color2").spectrum("set", settings_obj.item_border_color2 != "transparent" ? settings_obj.item_border_color2 : null);
		
		// bullets navigation settings
    	$("#show_bullets_navigation").val(settings_obj.show_bullets_navigation);
    	$("#bullets_background_normal_color1").spectrum("set", settings_obj.bullets_background_normal_color1 != "transparent" ? settings_obj.bullets_background_normal_color1 : null);
    	$("#bullets_background_normal_color2").spectrum("set", settings_obj.bullets_background_normal_color2 != "transparent" ? settings_obj.bullets_background_normal_color2 : null);
		$("#bullets_background_selected_color1").spectrum("set", settings_obj.bullets_background_selected_color1 != "transparent" ? settings_obj.bullets_background_selected_color1 : null);
    	$("#bullets_background_selected_color2").spectrum("set", settings_obj.bullets_background_selected_color2 != "transparent" ? settings_obj.bullets_background_selected_color2 : null);
		$("#bullets_shadow").val(settings_obj.bullets_shadow);
		$("#bullets_normal_radius").val(settings_obj.bullets_normal_radius);
		$("#bullets_selected_radius").val(settings_obj.bullets_selected_radius);
		$("#space_between_bullets").val(settings_obj.space_between_bullets);
		$("#bullets_offset").val(settings_obj.bullets_offset);
		
    }

    function init()
    {   
    	$.each(settingsAr, function(i, el)
		{
			$("#skins").append("<option value='" + el.id + "'>" + el.name + "</option>");
		});
    	
    	$("#skins").val(sid);
    	
    	if (cur_order_id < DEFAULT_SKINS_NR)
    	{
    		$("#update_btn").hide();
            $("#del_btn").hide();
    	}
    	else
    	{
    		$("#update_btn").show();
            $("#del_btn").show();
    	}
	    
	    setSettings();
	    
	    $("#preset_id").html("ID : " + sid);
	    
	    $("#tabs").tabs("option", "active", tab_init_id);
    }
    
    init();
    
    $("#skins").change(function()
    {
    	sid = parseInt($("#skins").val());
    	
    	$.each(settingsAr, function(i, el)
		{
			if (sid == el.id)
			{
				cur_order_id = i;
			}
		});
    	
    	setSettings();
    	
    	if (cur_order_id < DEFAULT_SKINS_NR)
    	{
    		$("#update_btn").hide();
            $("#del_btn").hide();
    	}
    	else
    	{
    		$("#update_btn").show();
            $("#del_btn").show();
    	}
    	
    	allFields.removeClass("ui-state-error");
    	$("#tips").text("All form fields are required.");
    	
    	$("#preset_id").html("ID : " + sid);
    });
    
    function updateSettings()
    {
    	// main settings
    	cur_settings_obj.id = sid;
    	cur_settings_obj.name = $("#name").val().replace(/"/g, "'");
    	cur_settings_obj.display_type = $("#display_type").val();
    	cur_settings_obj.autoscale = $("#autoscale").val();
    	cur_settings_obj.cov_width = parseInt($("#cov_width").val());
    	cur_settings_obj.cov_height = parseInt($("#cov_height").val());
    	cur_settings_obj.skin_path = $("#skin_path").val().replace(/"/g, "'");
    	cur_settings_obj.cov_bg_color = $("#cov_bg_color").spectrum("get") ? $("#cov_bg_color").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.cov_bg_image_url = $("#cov_bg_image_url").val().replace(/"/g, "'");
    	cur_settings_obj.thumbs_bg_image_url = $("#thumbs_bg_image_url").val().replace(/"/g, "'");
    	cur_settings_obj.scrollbar_bg_image_url = $("#scrollbar_bg_image_url").val().replace(/"/g, "'");
    	cur_settings_obj.bg_repeat = $("#bg_repeat").val();
    	cur_settings_obj.car_topology = $("#car_topology").val();
    	cur_settings_obj.car_x_radius = parseInt($("#car_x_radius").val());
    	cur_settings_obj.car_y_radius = parseInt($("#car_y_radius").val());
    	cur_settings_obj.car_x_rot = parseInt($("#car_x_rot").val());
    	cur_settings_obj.car_y_offset = parseInt($("#car_y_offset").val());
    	cur_settings_obj.show_center_image = $("#show_center_image").val();
    	cur_settings_obj.center_image_url = $("#center_image_url").val().replace(/"/g, "'");
    	cur_settings_obj.center_image_y_offset = parseInt($("#center_image_y_offset").val());
    	cur_settings_obj.show_2d_display = $("#show_2d_display").val();
    	cur_settings_obj.cov_start_pos = $("#cov_start_pos").val();
    	cur_settings_obj.cov_autoplay = $("#cov_autoplay").val();
    	cur_settings_obj.cov_slideshow_delay = parseInt($("#cov_slideshow_delay").val());
    	cur_settings_obj.right_click_context_menu = $("#right_click_context_menu").val();
    	cur_settings_obj.cov_keyboard_support = $("#cov_keyboard_support").val();
		cur_settings_obj.fluid_width_z_index = parseInt($("#fluid_width_z_index").val());
		cur_settings_obj.show_large_next_and_prev_buttons = $("#show_large_next_and_prev_buttons").val();
		cur_settings_obj.large_next_and_prev_buttons_offest = parseInt($("#large_next_and_prev_buttons_offest").val());
		cur_settings_obj.use_drag_and_swipe = $("#use_drag_and_swipe").val();
		

    	// thumbs settings
    	cur_settings_obj.thumb_width = parseInt($("#thumb_width").val());
    	cur_settings_obj.thumb_height = parseInt($("#thumb_height").val());
    	cur_settings_obj.thumb_border_size = parseInt($("#thumb_border_size").val());
    	cur_settings_obj.thumb_min_alpha = parseFloat($("#thumb_min_alpha").val());
    	cur_settings_obj.thumb_bg_color = $("#thumb_bg_color").spectrum("get") ? $("#thumb_bg_color").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.thumb_border_color1 = $("#thumb_border_color1").spectrum("get") ? $("#thumb_border_color1").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.thumb_border_color2 = $("#thumb_border_color2").spectrum("get") ? $("#thumb_border_color2").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.transparent_images = $("#transparent_images").val();
    	cur_settings_obj.max_thumbs_mobile = parseInt($("#max_thumbs_mobile").val());
    	cur_settings_obj.show_thumbs_gradient = $("#show_thumbs_gradient").val();
    	cur_settings_obj.show_thumbs_text = $("#show_thumbs_text").val();
    	cur_settings_obj.text_bg_color = $("#text_bg_color").spectrum("get") ? $("#text_bg_color").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.text_bg_opacity = parseFloat($("#text_bg_opacity").val());
    	cur_settings_obj.show_text_bg_image = $("#show_text_bg_image").val();
    	cur_settings_obj.show_full_text_without_hover = $("#show_full_text_without_hover").val();
    	cur_settings_obj.show_thumb_box_shadow = $("#show_thumb_box_shadow").val();
    	cur_settings_obj.box_shadow_css = $("#box_shadow_css").val().replace(/"/g, "'");
    	cur_settings_obj.show_reflection = $("#show_reflection").val();
    	cur_settings_obj.reflection_height = parseInt($("#reflection_height").val());
    	cur_settings_obj.reflection_distance = parseInt($("#reflection_distance").val());
    	cur_settings_obj.reflection_opacity = parseFloat($("#reflection_opacity").val());

    	// controls settings
    	cur_settings_obj.controls_max_width = parseInt($("#controls_max_width").val());
    	cur_settings_obj.controls_height = parseInt($("#controls_height").val());
    	cur_settings_obj.controls_position = $("#controls_position").val();
		cur_settings_obj.thumbnail_text_position = $("#thumbnail_text_position").val();
    	cur_settings_obj.show_prev_btn = $("#show_prev_btn").val();
    	cur_settings_obj.show_next_btn = $("#show_next_btn").val();
    	cur_settings_obj.disable_btns_mobile = $("#disable_btns_mobile").val();
    	cur_settings_obj.show_slideshow_btn = $("#show_slideshow_btn").val();
    	cur_settings_obj.timer_color = $("#timer_color").spectrum("get") ? $("#timer_color").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.show_scrollbar = $("#show_scrollbar").val();
    	cur_settings_obj.scrollbar_handler_width = parseInt($("#scrollbar_handler_width").val());
		cur_settings_obj.scrollbar_text_normal_color = $("#scrollbar_text_normal_color").spectrum("get") ? $("#scrollbar_text_normal_color").spectrum("get").toHexString() : "transparent";
		cur_settings_obj.scrollbar_text_selected_color = $("#scrollbar_text_selected_color").spectrum("get") ? $("#scrollbar_text_selected_color").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.disable_scrollbar_mobile = $("#disable_scrollbar_mobile").val();
    	cur_settings_obj.enable_mouse_wheel = $("#enable_mouse_wheel").val();

    	// combobox settings
    	cur_settings_obj.show_combobox = $("#show_combobox").val();
    	cur_settings_obj.start_category = parseInt($("#start_category").val());
    	cur_settings_obj.select_label = $("#select_label").val().replace(/"/g, "'");
    	cur_settings_obj.all_cats_label = $("#all_cats_label").val().replace(/"/g, "'");
    	cur_settings_obj.show_all_cats = $("#show_all_cats").val();
    	cur_settings_obj.combobox_pos = $("#combobox_pos").val();
    	cur_settings_obj.selector_bg_normal_color1 = $("#selector_bg_normal_color1").spectrum("get") ? $("#selector_bg_normal_color1").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.selector_bg_normal_color2 = $("#selector_bg_normal_color2").spectrum("get") ? $("#selector_bg_normal_color2").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.selector_bg_selected_color1 = $("#selector_bg_selected_color1").spectrum("get") ? $("#selector_bg_selected_color1").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.selector_bg_selected_color2 = $("#selector_bg_selected_color2").spectrum("get") ? $("#selector_bg_selected_color2").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.selector_text_normal_color = $("#selector_text_normal_color").spectrum("get") ? $("#selector_text_normal_color").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.selector_text_selected_color = $("#selector_text_selected_color").spectrum("get") ? $("#selector_text_selected_color").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.button_bg_normal_color1 = $("#button_bg_normal_color1").spectrum("get") ? $("#button_bg_normal_color1").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.button_bg_normal_color2 = $("#button_bg_normal_color2").spectrum("get") ? $("#button_bg_normal_color2").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.button_bg_selected_color1 = $("#button_bg_selected_color1").spectrum("get") ? $("#button_bg_selected_color1").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.button_bg_selected_color2 = $("#button_bg_selected_color2").spectrum("get") ? $("#button_bg_selected_color2").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.button_text_normal_color = $("#button_text_normal_color").spectrum("get") ? $("#button_text_normal_color").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.button_text_selected_color = $("#button_text_selected_color").spectrum("get") ? $("#button_text_selected_color").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.combobox_shadow_color = $("#combobox_shadow_color").spectrum("get") ? $("#combobox_shadow_color").spectrum("get").toHexString() : "transparent";
    	cur_settings_obj.combobox_horizontal_margins = parseInt($("#combobox_horizontal_margins").val());
    	cur_settings_obj.combobox_vertical_margins = parseInt($("#combobox_vertical_margins").val());
    	cur_settings_obj.combobox_corner_radius = parseInt($("#combobox_corner_radius").val());
		
		// lightbox settings
    	cur_settings_obj.buttons_alignment = $("#buttons_alignment").val();
		cur_settings_obj.item_box_shadow = $("#item_box_shadow").val();
		cur_settings_obj.description_windowAnimation_type = $("#description_windowAnimation_type").val();
		cur_settings_obj.description_window_position = $("#description_window_position").val();
		cur_settings_obj.description_window_animation_type = $("#description_window_animation_type").val();
		cur_settings_obj.slide_show_auto_play = $("#slide_show_auto_play").val();
		cur_settings_obj.add_keyboard_support = $("#add_keyboard_support").val();
		cur_settings_obj.show_close_button = $("#show_close_button").val();
		cur_settings_obj.show_share_button = $("#show_share_button").val();
		cur_settings_obj.show_zoom_button = $("#show_zoom_button").val();
		cur_settings_obj.show_slide_show_button = $("#show_slide_show_button").val();
		cur_settings_obj.show_slide_show_animation = $("#show_slide_show_animation").val();
		cur_settings_obj.show_next_and_prev_buttons = $("#show_next_and_prev_buttons").val();
		cur_settings_obj.show_next_and_prev_buttons_on_mobile = $("#show_next_and_prev_buttons_on_mobile").val();
		cur_settings_obj.show_description_button = $("#show_description_button").val();
		cur_settings_obj.show_description_by_default = $("#show_description_by_default").val();
		cur_settings_obj.video_show_full_screen_button = $("#video_show_full_screen_button").val();
		cur_settings_obj.video_auto_play = $("#video_auto_play").val();
		cur_settings_obj.next_video_or_audio_auto_play = $("#next_video_or_audio_auto_play").val();
		cur_settings_obj.video_loop = $("#video_loop").val();
		cur_settings_obj.audio_auto_play = $("#audio_auto_play").val();
		cur_settings_obj.audio_loop = $("#audio_loop").val();
		cur_settings_obj.background_opacity = parseFloat($("#background_opacity").val());
		cur_settings_obj.description_window_background_opacity = parseFloat($("#description_window_background_opacity").val());
		cur_settings_obj.buttons_hide_delay = parseInt($("#buttons_hide_delay").val());
		cur_settings_obj.slide_show_delay = parseInt($("#slide_show_delay").val());	
		cur_settings_obj.default_item_width = parseInt($("#default_item_width").val());	
		cur_settings_obj.default_item_height = parseInt($("#default_item_height").val());	
		cur_settings_obj.item_offset_height = parseInt($("#item_offset_height").val());	
		cur_settings_obj.space_between_buttons = parseInt($("#space_between_buttons").val());	
		cur_settings_obj.buttons_offset_in = parseInt($("#buttons_offset_in").val());	
		cur_settings_obj.buttons_offset_out = parseInt($("#buttons_offset_out").val());	
		cur_settings_obj.item_border_size = parseInt($("#item_border_size").val());	
		cur_settings_obj.item_border_radius = parseInt($("#item_border_radius").val());	
		cur_settings_obj.light_box_background_color = $("#light_box_background_color").spectrum("get") ? $("#light_box_background_color").spectrum("get").toHexString() : "transparent";
		cur_settings_obj.description_window_background_color = $("#description_window_background_color").spectrum("get") ? $("#description_window_background_color").spectrum("get").toHexString() : "transparent";
		cur_settings_obj.video_poster_background_color = $("#video_poster_background_color").spectrum("get") ? $("#video_poster_background_color").spectrum("get").toHexString() : "transparent";
		cur_settings_obj.video_controller_background_color = $("#video_controller_background_color").spectrum("get") ? $("#video_controller_background_color").spectrum("get").toHexString() : "transparent";
		cur_settings_obj.audio_controller_background_color = $("#audio_controller_background_color").spectrum("get") ? $("#audio_controller_background_color").spectrum("get").toHexString() : "transparent";
		cur_settings_obj.time_color = $("#time_color").spectrum("get") ? $("#time_color").spectrum("get").toHexString() : "transparent";
		cur_settings_obj.item_background_color = $("#item_background_color").spectrum("get") ? $("#item_background_color").spectrum("get").toHexString() : "transparent";
		cur_settings_obj.item_border_color1 = $("#item_border_color1").spectrum("get") ? $("#item_border_color1").spectrum("get").toHexString() : "transparent";
		cur_settings_obj.item_border_color2 = $("#item_border_color2").spectrum("get") ? $("#item_border_color2").spectrum("get").toHexString() : "transparent";

		// bullets navigation settings
		cur_settings_obj.show_bullets_navigation = $("#show_bullets_navigation").val();
    	cur_settings_obj.bullets_background_normal_color1 = $("#bullets_background_normal_color1").spectrum("get") ? $("#bullets_background_normal_color1").spectrum("get").toHexString() : "transparent";
		cur_settings_obj.bullets_background_normal_color2 = $("#bullets_background_normal_color2").spectrum("get") ? $("#bullets_background_normal_color2").spectrum("get").toHexString() : "transparent";
		cur_settings_obj.bullets_background_selected_color1 = $("#bullets_background_selected_color1").spectrum("get") ? $("#bullets_background_selected_color1").spectrum("get").toHexString() : "transparent";
		cur_settings_obj.bullets_background_selected_color2 = $("#bullets_background_selected_color2").spectrum("get") ? $("#bullets_background_selected_color2").spectrum("get").toHexString() : "transparent";
		cur_settings_obj.bullets_shadow = $("#bullets_shadow").val();
		cur_settings_obj.bullets_normal_radius = parseInt($("#bullets_normal_radius").val());
		cur_settings_obj.bullets_selected_radius = parseInt($("#bullets_selected_radius").val());
		cur_settings_obj.space_between_bullets = parseInt($("#space_between_bullets").val());
		cur_settings_obj.bullets_offset = parseInt($("#bullets_offset").val());
    }
    
    function checkLength(el, prop, min, max)
	{
      	if ((el.val().length > max) || (el.val().length < min))
	    {
        	el.addClass("ui-state-error");
        	updateTips("Length of " + prop + " must be between " + min + " and " + max + ".");
        	
        	return false;
      	}
	    else
		{
        	return true;
      	}
	}
    
    function checkIfIntegerAndLength(el, prop, min, max)
	{
    	var int_reg_exp = /-?[0-9]+/;
    	var str = el.val();
    	var res = str.match(int_reg_exp);
    	
    	if (res && (res[0] == str))
        {
    		if ((el.val().length > max) || (el.val().length < min))
    	    {
            	el.addClass("ui-state-error");
            	updateTips("Length of " + prop + " must be between " + min + " and " + max + ".");
            	
            	return false;
          	}
    	    else
    		{
            	return true;
          	}
        }
        else
        {
        	el.addClass("ui-state-error");
        	updateTips("The " + prop + " field value must be an integer.");
        	
        	return false;
        }
	}
    
    function checkIfFloatAndLength(el, prop, min, max)
	{
    	var float_reg_exp = /1\.0|0?\.[0-9]+|[01]/;
    	var str = el.val();
    	var res = str.match(float_reg_exp);
    	
    	if (res && (res[0] == str))
        {
    		if ((el.val().length > max) || (el.val().length < min))
    	    {
            	el.addClass("ui-state-error");
            	updateTips("Length of " + prop + " must be between " + min + " and " + max + ".");
            	
            	return false;
          	}
    	    else
    		{
            	return true;
          	}
        }
        else
        {
        	el.addClass("ui-state-error");
        	updateTips("The " + prop + " field value must be a float number.");
        	
        	return false;
        }
	}
	
	function checkIfFloatAndLength2(el, prop, min, max){
    	var float_reg_exp = /[0-9]*\.?[0-9]+/;
    	var str = el.val();
    	var res = str.match(float_reg_exp);

    	if (res && (res[0] == str)){
    		if ((el.val().length > max) || (el.val().length < min)){
            	el.addClass("ui-state-error");
            	updateTips("Length of " + prop + " must be between " + min + " and " + max + ".");
            	return false;
          	}else{
            	return true;
          	}
        }else{
        	el.addClass("ui-state-error");
        	updateTips("The " + prop + " field value must be a float number.");
        	return false;
        }
	}

	function updateTips(txt)
	{
		$("#tips").text(txt).addClass("ui-state-highlight");

	    setTimeout(function()
		{
	    	$("#tips").removeClass("ui-state-highlight", 1500);
	    }, 500);
	    
	    $("#tips").addClass("fwd-error");
	}
	
	var allFields = $([]).add($("#name")).add($("#cov_width")).add($("#cov_height")).add($("#skin_path")).add($("#cov_bg_image_url")).add($("#thumbs_bg_image_url")).add($("#scrollbar_bg_image_url"))
	 					  .add($("#car_x_radius")).add($("#car_y_radius")).add($("#car_x_rot")).add($("#car_y_offset")).add($("#center_image_url")).add($("#center_image_y_offset"))
						  .add($("#cov_slideshow_delay")).add($("#fluid_width_z_index")).add($("#large_next_and_prev_buttons_offest")).add($("#thumb_width")).add($("#thumb_height")).add($("#thumb_border_size")).add($("#thumb_min_alpha")).add($("#max_thumbs_mobile"))
						  .add($("#text_bg_opacity")).add($("#box_shadow_css")).add($("#reflection_height")).add($("#reflection_distance")).add($("#reflection_opacity")).add($("#controls_max_width"))
						  .add($("#controls_height")).add($("#scrollbar_handler_width")).add($("#start_category")).add($("#select_label")).add($("#all_cats_label")).add($("#combobox_horizontal_margins"))
						  .add($("#combobox_vertical_margins")).add($("#combobox_corner_radius")).add($("#lightbox_video_width")).add($("#lightbox_video_height")).add($("#lightbox_iframe_width"))
	 					  .add($("#lightbox_iframe_height")).add($("#lightbox_bg_opacity")).add($("#lightbox_info_bg_opacity")).add($("#lightbox_border_size")).add($("#lightbox_border_radius"))
	 					  .add($("#lightbox_slideshow_delay")).add($("#bullets_normal_radius")).add($("#bullets_selected_radius")).add($("#space_between_bullets")).add($("#bullets_offset")).add($("#background_opacity")).add($("#description_window_background_opacity")).add($("#buttons_hide_delay")).add($("#slide_show_delay")).add($("#default_item_width")).add($("#default_item_height")).add($("#item_offset_height")).add($("#space_between_buttons")).add($("#buttons_offset_in")).add($("#buttons_offset_out")).add($("#item_border_size")).add($("#item_border_radius"));
						  
	var fValid = false;
	 
	function validateFields()
	{
		fValid = true;
     	
      	allFields.removeClass("ui-state-error");

      	// main settings
      	fValid = fValid && checkLength($("#name"), "name", 1, 64);
      	fValid = fValid && checkIfIntegerAndLength($("#cov_width"), "carousel width", 1, 8);
      	fValid = fValid && checkIfIntegerAndLength($("#cov_height"), "carousel height", 1, 8);
      	fValid = fValid && checkLength($("#skin_path"), "skin path", 1, 256);
      	fValid = fValid && checkLength($("#cov_bg_image_url"), "background image path", 0, 256);
      	fValid = fValid && checkLength($("#thumbs_bg_image_url"), "thumbnails background image path", 0, 256);
      	fValid = fValid && checkLength($("#scrollbar_bg_image_url"), "scrollbar background image path", 0, 256);
      	fValid = fValid && checkIfIntegerAndLength($("#car_x_radius"), "carousel X radius", 1, 8);
    	fValid = fValid && checkIfIntegerAndLength($("#car_y_radius"), "carousel Y radius", 1, 8);
    	fValid = fValid && checkIfIntegerAndLength($("#car_x_rot"), "carousel X rotation", 1, 8);
    	fValid = fValid && checkIfIntegerAndLength($("#car_y_offset"), "carousel Y offset", 1, 8);
    	fValid = fValid && checkLength($("#center_image_url"), "center image path", 0, 256);
    	fValid = fValid && checkIfIntegerAndLength($("#center_image_y_offset"), "center image Y offset", 1, 8);
      	fValid = fValid && checkIfIntegerAndLength($("#cov_slideshow_delay"), "carousel slideshow delay", 1, 8);
      	fValid = fValid && checkIfIntegerAndLength($("#fluid_width_z_index"), "fluid-width z-index", 1, 16);
		fValid = fValid && checkIfIntegerAndLength($("#large_next_and_prev_buttons_offest"), "large next and prev buttons offset", 1, 16);
		
      	
      	if (!fValid)
      	{
      		$("#tabs").tabs("option", "active", 0);
      		
      		window.scrollTo(0,0);
      		
      		return false;
      	}
      	
      	// thumbs settings
      	fValid = fValid && checkIfIntegerAndLength($("#thumb_width"), "thumbnail width", 1, 8);
      	fValid = fValid && checkIfIntegerAndLength($("#thumb_height"), "thumbnail height", 1, 8);
      	fValid = fValid && checkIfIntegerAndLength($("#thumb_border_size"), "thumbnail border size", 1, 8);
    	fValid = fValid && checkIfFloatAndLength($("#thumb_min_alpha"), "thumbnail minimum alpha", 1, 8);
      	fValid = fValid && checkIfIntegerAndLength($("#max_thumbs_mobile"), "maximum number of thumbnails on mobiles", 1, 8);
      	fValid = fValid && checkIfFloatAndLength($("#text_bg_opacity"), "text background opacity", 1, 8);
      	fValid = fValid && checkLength($("#box_shadow_css"), "thumbnail box shadow CSS", 1, 64);
      	fValid = fValid && checkIfIntegerAndLength($("#reflection_height"), "thumbnail reflection height", 1, 8);
    	fValid = fValid && checkIfIntegerAndLength($("#reflection_distance"), "thumbnail reflection distance", 1, 8);
    	fValid = fValid && checkIfFloatAndLength($("#reflection_opacity"), "thumbnail reflection opacity", 1, 8);
      	
      	if (!fValid)
      	{
      		$("#tabs").tabs("option", "active", 1);
      		
      		window.scrollTo(0,0);
      		
      		return false;
      	}
      	
      	// controls settings
      	fValid = fValid && checkIfIntegerAndLength($("#controls_max_width"), "controls maximum width", 1, 8);
      	fValid = fValid && checkIfIntegerAndLength($("#controls_height"), "controls height", 1, 8);
      	fValid = fValid && checkIfIntegerAndLength($("#scrollbar_handler_width"), "scrollbar handler width", 1, 8);
      	
      	if (!fValid)
      	{
      		$("#tabs").tabs("option", "active", 2);
      		
      		window.scrollTo(0,0);
      		
      		return false;
      	}
      	
      	// combobox settings
      	fValid = fValid && checkIfIntegerAndLength($("#start_category"), "combobox start category", 1, 8);
      	fValid = fValid && checkLength($("#select_label"), "combobox select label", 1, 64);
      	fValid = fValid && checkLength($("#all_cats_label"), "combobox all categories label", 1, 64);
      	fValid = fValid && checkIfIntegerAndLength($("#combobox_horizontal_margins"), "combobox horizontal margins", 1, 8);
      	fValid = fValid && checkIfIntegerAndLength($("#combobox_vertical_margins"), "combobox vertical margins", 1, 8);
      	fValid = fValid && checkIfIntegerAndLength($("#combobox_corner_radius"), "combobox corner radiuss", 1, 8);
      	
      	if (!fValid)
      	{
      		$("#tabs").tabs("option", "active", 3);
      		
      		window.scrollTo(0,0);
      		
      		return false;
      	}
      	
      	// lightbox settings
    	fValid = fValid && checkIfFloatAndLength2($("#background_opacity"), "main background opacity", 1, 8);
		fValid = fValid && checkIfFloatAndLength2($("#description_window_background_opacity"), "description window background opacity:", 1, 8);
		fValid = fValid && checkIfIntegerAndLength($("#buttons_hide_delay"), "buttons hide delay", 1, 8);
		fValid = fValid && checkIfIntegerAndLength($("#slide_show_delay"), "slideshow hide delay", 1, 8);
		fValid = fValid && checkIfIntegerAndLength($("#default_item_width"), "default item width", 1, 8);
		fValid = fValid && checkIfIntegerAndLength($("#default_item_height"), "default item height", 1, 8);
		fValid = fValid && checkIfIntegerAndLength($("#item_offset_height"), "item offset height", 1, 8);
		fValid = fValid && checkIfIntegerAndLength($("#space_between_buttons"), "space between buttons", 1, 8);
		fValid = fValid && checkIfIntegerAndLength($("#buttons_offset_in"), "buttons offset in", 1, 8);	
		fValid = fValid && checkIfIntegerAndLength($("#buttons_offset_out"), "buttons offset out", 1, 8);			
		fValid = fValid && checkIfIntegerAndLength($("#item_border_size"), "item border size", 1, 8);
		fValid = fValid && checkIfIntegerAndLength($("#item_border_radius"), "item border radius", 1, 8);
      	
      	if (!fValid)
      	{
      		$("#tabs").tabs("option", "active", 4);
      		
      		window.scrollTo(0,0);
      		
      		return false;
      	}
		
		// navigation bullets settings
    	fValid = fValid && checkIfIntegerAndLength($("#bullets_normal_radius"), "bullets normal radius", 1, 8);
    	fValid = fValid && checkIfIntegerAndLength($("#bullets_selected_radius"), "bullets selected radius", 1, 8);
    	fValid = fValid && checkIfIntegerAndLength($("#space_between_bullets"), "space between bullets", 1, 8);
    	fValid = fValid && checkIfIntegerAndLength($("#bullets_offset"), "bullets offset", 1, 8);
      	
      	if (!fValid)
      	{
      		$("#tabs").tabs("option", "active", 5);
      		
      		window.scrollTo(0,0);
      		
      		return false;
      	}
	}
    
    $("#add_btn").click(function()
	{
		
		if($("#name").val() == settingsAr[cur_order_id]["name"]){
			updateTips("Please make sure that the preset name is unique");
			$("#name").addClass("ui-state-error");
			$("#tabs").tabs("option", "active", 0);
			window.scrollTo(0,0);
			return false;
		};
		
    	validateFields();

      	if (fValid)
        {
      		cur_settings_obj = {};
        	
        	sid = $("#skins option").length;
        	cur_order_id = $("#skins option").length;
        	
      		var idsAr = [];
      		
      		if (sid > DEFAULT_SKINS_NR)
      		{
      			$.each(settingsAr, function(i, el)
    			{
    				idsAr.push(el.id);
    			});
          		
          		for (var i=DEFAULT_SKINS_NR; i<settingsAr.length; i++)
          		{
          			if ($.inArray(i, idsAr) == -1)
          			{
          				sid = i;
          				break;
          			}
          		}
      		}
        	
	    	updateSettings();
	    	
	    	settingsAr.push(cur_settings_obj);
	    	
	    	var data_obj =
	    	{
	    		action: "add",
	    		set_id: sid,
	    		set_order_id: cur_order_id,
	    		tab_init_id: $("#tabs").tabs("option", "active"),
	    		settings_ar: settingsAr
	    	};
	    	
	    	$("#settings_data").val(JSON.stringify(data_obj));
        }
      	else
      	{
      		return false;
      	}
    });
    
    $("#update_btn").click(function()
	{
    	validateFields();

      	if (fValid)
        {
      		cur_settings_obj = {};
      		
	    	updateSettings();
	    	
	    	settingsAr[cur_order_id] = cur_settings_obj;
	    	
	    	var data_obj =
	    	{
	    		action: "save",
	    		set_id: sid,
	    		set_order_id: cur_order_id,
	    		tab_init_id: $("#tabs").tabs("option", "active"),
	    		settings_ar: settingsAr
	    	};
	    	
	    	$("#settings_data").val(JSON.stringify(data_obj));
        }
      	else
      	{
      		return false;
      	}
    });
    
    $("#del_btn").click(function()
	{
    	settingsAr.splice(cur_order_id, 1);
    	
    	var data_obj =
    	{
    		action: "del",
    		settings_ar: settingsAr
    	};
    	
    	$("#settings_data").val(JSON.stringify(data_obj));
    });
});