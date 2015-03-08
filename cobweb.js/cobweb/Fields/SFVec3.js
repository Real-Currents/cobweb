
define ([
	"jquery",
	"standard/Math/Numbers/Vector3",
	"cobweb/Basic/X3DField",
	"cobweb/Bits/X3DConstants",
],
function ($, Vector3, X3DField, X3DConstants)
{
	function SFVec3 (x, y, z)
	{
		if (arguments .length)
		{
			if (arguments [0] instanceof Vector3)
				X3DField .call (this, arguments [0]);
			else
				X3DField .call (this, new Vector3 (+x, +y, +z));
		}
		else
			X3DField .call (this, new Vector3 ());
	}

	SFVec3 .prototype = $.extend (new X3DField (),
	{
		constructor: SFVec3,
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
			return new (this .constructor) (this .getValue () .copy () .negate ());
		},
		add: function (vector)
		{
			return new (this .constructor) (this .getValue () .copy () .add (vector .getValue ()));
		},
		subtract: function (vector)
		{
			return new (this .constructor) (this .getValue () .copy () .subtract (vector .getValue ()));
		},
		multiply: function (value)
		{
			return new (this .constructor) (this .getValue () .copy () .multiply (value));
		},
		divide: function (value)
		{
			return new (this .constructor) (this .getValue () .copy () .divide (value));
		},
		cross: function (vector)
		{
			return new (this .constructor) (this .getValue () .copy () .cross (vector .getValue ()));
		},
		dot: function (vector)
		{
			return new (this .constructor) (this .getValue () .dot (vector .getValue ()));
		},
		normalize: function (vector)
		{
			return new (this .constructor) (this .getValue () .copy () .normalize ());
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

	Object .defineProperty (SFVec3 .prototype, "x",
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

	Object .defineProperty (SFVec3 .prototype, "0",
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

	Object .defineProperty (SFVec3 .prototype, "y",
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

	Object .defineProperty (SFVec3 .prototype, "1",
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

	Object .defineProperty (SFVec3 .prototype, "z",
	{
		get: function ()
		{
			return this .getValue () .z;
		},
		set: function (value)
		{
			this .getValue () .z = value;
			this .addEvent ();
		},
		enumerable: true,
		configurable: false
	});

	Object .defineProperty (SFVec3 .prototype, "2",
	{
		get: function ()
		{
			return this .getValue () .z;
		},
		set: function (value)
		{
			this .getValue () .z = value;
			this .addEvent ();
		},
		enumerable: false,
		configurable: false
	});

	/*
	 *  SFVec3d
	 */

	function SFVec3d (x, y, z)
	{
		SFVec3 .apply (this, arguments);
	}

	SFVec3d .prototype = $.extend (new SFVec3 (),
	{
		constructor: SFVec3d,
		getTypeName: function ()
		{
			return "SFVec3d";
		},
		getType: function ()
		{
			return X3DConstants .SFVec3d;
		},
	});

	/*
	 *  SFVec3f
	 */

	function SFVec3f (x, y, z)
	{
		SFVec3 .apply (this, arguments);
	}

	SFVec3f .prototype = $.extend (new SFVec3 (),
	{
		constructor: SFVec3f,
		getTypeName: function ()
		{
			return "SFVec3f";
		},
		getType: function ()
		{
			return X3DConstants .SFVec3f;
		},
	});

	return {
		SFVec3d: SFVec3d,
		SFVec3f: SFVec3f,
	};
});