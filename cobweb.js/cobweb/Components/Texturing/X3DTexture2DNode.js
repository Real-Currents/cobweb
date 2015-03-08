
define ([
	"jquery",
	"cobweb/Components/Texturing/X3DTextureNode",
	"cobweb/Bits/X3DCast",
	"cobweb/Bits/X3DConstants",
],
function ($,
          X3DTextureNode,
          X3DCast,
          X3DConstants)
{
	function X3DTexture2DNode (browser, executionContext)
	{
		X3DTextureNode .call (this, browser, executionContext);

		this .addType (X3DConstants .X3DTexture2DNode);
			
		this .transparent = false;
		this .width       = 0;
		this .height      = 0;
		this .components  = 0;
	}

	X3DTexture2DNode .prototype = $.extend (new X3DTextureNode (),
	{
		constructor: X3DTexture2DNode,
		initialize: function ()
		{
			X3DTextureNode .prototype .initialize .call (this);
			
			this .repeatS_           .addInterest (this, "updateTextureProperties");
			this .repeatT_           .addInterest (this, "updateTextureProperties");
			this .textureProperties_ .addInterest (this, "set_textureProperties__");

			this .set_textureProperties__ ();
		},
		set_textureProperties__: function ()
		{
			if (this .texturePropertiesNode)
				this .texturePropertiesNode .removeInterest (this, "updateTextureProperties");

			this .texturePropertiesNode = X3DCast (X3DConstants .TextureProperties, this .textureProperties_);

			if (! this .texturePropertiesNode)
				this .texturePropertiesNode = this .getBrowser () .getDefaultTextureProperties ();

			this .texturePropertiesNode .addInterest (this, "updateTextureProperties");

			this .updateTextureProperties ();
		},
		isTransparent: function ()
		{
			return this .transparent;
		},
		getWidth: function ()
		{
			return this .width;
		},
		getHeight: function ()
		{
			return this .height;
		},
		getComponents: function ()
		{
			return this .components;
		},
		setTexture: function (width, height, components, data)
		{
			this .transparent = components && !(components % 2);
			this .width       = width;
			this .height      = height;
			this .components  = components;

			var gl = this .getBrowser () .getContext ();

			gl .pixelStorei (gl .UNPACK_FLIP_Y_WEBGL, true);
			gl .bindTexture (gl .TEXTURE_2D, this .getTexture ());
			gl .texImage2D  (gl .TEXTURE_2D, 0, gl .RGBA, width, height, 0, gl .RGBA, gl .UNSIGNED_BYTE, data);
			gl .bindTexture (gl .TEXTURE_2D, null);

			this .updateTextureProperties ();

			this .getBrowser () .addBrowserEvent ();
		},
		updateTextureProperties: function ()
		{
			var gl = this .getBrowser () .getContext ();

			X3DTextureNode .prototype .updateTextureProperties .call (this,
			                                                          gl .TEXTURE_2D,
			                                                          this .textureProperties_ .getValue (),
			                                                          this .texturePropertiesNode,
			                                                          this .width,
			                                                          this .height,
			                                                          this .repeatS_ .getValue (),
			                                                          this .repeatT_ .getValue (),
			                                                          false);
		},
		traverse: function ()
		{
			this .bind (this .getBrowser () .getContext () .TEXTURE_2D);
		},
	});

	return X3DTexture2DNode;
});
