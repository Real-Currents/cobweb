
define ([
	"jquery",
	"standard/Math/Numbers/Vector2",
	"cobweb/Basic/X3DField",
	"cobweb/Bits/X3DConstants",
],
function ($, Vector2, X3DField, X3DConstants)
{
"use strict";

	function SFVec2 (v)
	{
		if (v .length)
		{
			if (v[0] instanceof Vector2)
				return X3DField .call (this, v[0]);

			return X3DField .call (this, new Vector2 (+v[0], +v[1]));
		}

		return X3DField .call (this, new Vector2 (0, 0));
	}

	SFVec2 .prototype = $.extend (Object .create (X3DField .prototype),
	{
		constructor: SFVec2,
		copy: function ()
		{
			return new (this .constructor) (this .getValue () .copy ());
		},
		equals: function (vector)
		{
			return this .getValue () .equals (vector .getValue ());
		},
		set: function (value)
		{
			this .getValue () .assign (value);
		},
		negate: function ()
		{
			return new (this .constructor) (Vector2 .negate (this .getValue () .copy ()));
		},
		add: function (vector)
		{
			return new (this .constructor) (Vector2 .add (this .getValue (), vector .getValue ()));
		},
		subtract: function (vector)
		{
			return new (this .constructor) (Vector2 .subtract (this .getValue (), vector .getValue ()));
		},
		multiply: function (value)
		{
			return new (this .constructor) (Vector2 .multiply (this .getValue (), value));
		},
		divide: function (value)
		{
			return new (this .constructor) (Vector2 .divide (this .getValue (), value));
		},
		dot: function (vector)
		{
			return new (this .constructor) (this .getValue () .dot (vector .getValue ()));
		},
		normalize: function (vector)
		{
			return new (this .constructor) (Vector2 .normalize (this .getValue ()));
		},
		length: function (vector)
		{
			return new (this .constructor) (this .getValue () .abs ());
		},
		toString: function ()
		{
			return this .getValue () .toString ();
		},
	});

	Object .defineProperty (SFVec2 .prototype, "x",
	{
		get: function ()
		{
			return this .getValue () .x;
		},
		set: function (value)
		{
			this .getValue () .x = value;
			this .addEvent ();
		},
		enumerable: true,
		configurable: false
	});

	Object .defineProperty (SFVec2 .prototype, "0",
	{
		get: function ()
		{
			return this .getValue () .x;
		},
		set: function (value)
		{
			this .getValue () .x = value;
			this .addEvent ();
		},
		enumerable: false,
		configurable: false
	});

	Object .defineProperty (SFVec2 .prototype, "y",
	{
		get: function ()
		{
			return this .getValue () .y;
		},
		set: function (value)
		{
			this .getValue () .y = value;
			this .addEvent ();
		},
		enumerable: true,
		configurable: false
	});

	Object .defineProperty (SFVec2 .prototype, "1",
	{
		get: function ()
		{
			return this .getValue () .y;
		},
		set: function (value)
		{
			this .getValue () .y = value;
			this .addEvent ();
		},
		enumerable: false,
		configurable: false
	});

	/*
	 *  SFVec2d
	 */

	function SFVec2d (x, y)
	{
	   if (this instanceof SFVec2d)
			return SFVec2 .call (this, arguments);
	
	   return SFVec2 .call (Object .create (SFVec2d .prototype), arguments);
	}

	SFVec2d .prototype = $.extend (Object .create (SFVec2 .prototype),
	{
		constructor: SFVec2d,
		getTypeName: function ()
		{
			return "SFVec2d";
		},
		getType: function ()
		{
			return X3DConstants .SFVec2d;
		},
	});

	/*
	 *  SFVec2f
	 */

	function SFVec2f (x, y)
	{
	   if (this instanceof SFVec2f)
			return SFVec2 .call (this, arguments);
	
	   return SFVec2 .call (Object .create (SFVec2f .prototype), arguments);
	}

	SFVec2f .prototype = $.extend (Object .create (SFVec2 .prototype),
	{
		constructor: SFVec2f,
		getTypeName: function ()
		{
			return "SFVec2f";
		},
		getType: function ()
		{
			return X3DConstants .SFVec2f;
		},
	});

	return {
		SFVec2d: SFVec2d,
		SFVec2f: SFVec2f,
	};
});
