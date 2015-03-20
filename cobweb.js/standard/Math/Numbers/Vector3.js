
define ([
	"jquery",
	"standard/Math/Algorithm",
],
function ($, Algorithm)
{
	function Vector3 (x, y, z)
	{		
		if (arguments .length)
		{
			this .x = x;
			this .y = y;
			this .z = z;
		}
		else
		{
			this .x = 0;
			this .y = 0;
			this .z = 0;
		}
	}

	Vector3 .prototype =
	{
		constructor: Vector3,
		length: 3,
		copy: function ()
		{
			var copy = Object .create (Vector3 .prototype);
			copy .assign (this);
			return copy;
		},
		assign: function (vector)
		{
			this .x = vector .x;
			this .y = vector .y;
			this .z = vector .z;
			return this;
		},
		set: function (x, y, z)
		{
			this .x = x;
			this .y = y;
			this .z = z;
			return this;
		},
		equals: function (vector)
		{
			return this .x === vector .x &&
			       this .y === vector .y &&
			       this .z === vector .z;
		},
		negate: function ()
		{
			this .x = -this .x;
			this .y = -this .y;
			this .z = -this .z;
			return this;
		},
		add: function (vector)
		{
			this .x += vector .x;
			this .y += vector .y;
			this .z += vector .z;
			return this;
		},
		subtract: function (vector)
		{
			this .x -= vector .x;
			this .y -= vector .y;
			this .z -= vector .z;
			return this;
		},
		multiply: function (value)
		{
			this .x *= value;
			this .y *= value;
			this .z *= value;
			return this;
		},
		multVec: function (vector)
		{
			this .x *= vector .x;
			this .y *= vector .y;
			this .z *= vector .z;
			return this;
		},
		divide: function (value)
		{
			this .x /= value;
			this .y /= value;
			this .z /= value;
			return this;
		},
		divVec: function (vector)
		{
			this .x /= vector .x;
			this .y /= vector .y;
			this .z /= vector .z;
			return this;
		},
		normalize: function ()
		{
			var length = this .abs ();
			
			if (length)
				return this .divide (length);

			return this;
		},
		cross: function (vector)
		{
			this .set (this .y * vector .z - this .z * vector .y,
			           this .z * vector .x - this .x * vector .z,
			           this .x * vector .y - this .y * vector .x);
			return this;
		},
		dot: function (vector)
		{
			return this .x * vector .x +
			       this .y * vector .y +
			       this .z * vector .z;
		},
		norm: function ()
		{
			return this .dot (this);
		},
		abs: function ()
		{
			return Math .sqrt (this .norm ());
		},
		min: function (vector)
		{
			for (var i = 0; i < arguments .length; ++ i)
			{
				var vector = arguments [i];

				this .x = Math .min (this .x, vector .x);
				this .y = Math .min (this .y, vector .y);
				this .z = Math .min (this .z, vector .z);
			}

			return this;
		},
		max: function (vector)
		{
			for (var i = 0; i < arguments .length; ++ i)
			{
				var vector = arguments [i];

				this .x = Math .max (this .x, vector .x);
				this .y = Math .max (this .y, vector .y);
				this .z = Math .max (this .z, vector .z);
			}

			return this;
		},
		toString: function ()
		{
			return this .x + " " +
			       this .y + " " +
			       this .z;
		}
	};

	Object .defineProperty (Vector3 .prototype, "0",
	{
		get: function () { return this .x; },
		set: function (value) { this .x = value; },
		enumerable: false,
		configurable: false
	});

	Object .defineProperty (Vector3 .prototype, "1",
	{
		get: function () { return this .y; },
		set: function (value) { this .y = value; },
		enumerable: false,
		configurable: false
	});

	Object .defineProperty (Vector3 .prototype, "2",
	{
		get: function () { return this .z; },
		set: function (value) { this .z = value; },
		enumerable: false,
		configurable: false
	});

	$.extend (Vector3,
	{
		Zero: new Vector3 (),
		One: new Vector3 (1, 1, 1),
		negate: function ()
		{
			return vector .copy () .negate ();
		},
		add: function (lhs, rhs)
		{
			return lhs .copy () .add (rhs);
		},
		subtract: function (lhs, rhs)
		{
			return lhs .copy () .subtract (rhs);
		},
		multiply: function (lhs, rhs)
		{
			return lhs .copy () .multiply (rhs);
		},
		multVec: function (lhs, rhs)
		{
			return lhs .copy () .multVec (rhs);
		},
		divide: function (lhs, rhs)
		{
			return lhs .copy () .divide (rhs);
		},
		divVec: function (lhs, rhs)
		{
			return lhs .copy () .divVec (rhs);
		},
		normalize: function ()
		{
			return vector .copy () .normalize ();
		},
		cross: function (lhs, rhs)
		{
			return lhs .copy () .cross (rhs);
		},
		lerp: function (source, dest, t)
		{
			return new Vector3 (Algorithm .lerp (source .x, dest .x, t),
			                    Algorithm .lerp (source .y, dest .y, t),
			                    Algorithm .lerp (source .z, dest .z, t));
		},
		slerp: Algorithm .slerp,
		min: function (lhs, rhs)
		{
			var
				x = arguments [0] .x,
				y = arguments [0] .y,
				z = arguments [0] .z;

			for (var i = 1; i < arguments .length; ++ i)
			{
				var vector = arguments [i];

				x = Math .min (x, vector .x);
				y = Math .min (y, vector .y);
				z = Math .min (z, vector .z);
			}

			return new Vector3 (x, y, z);
		},
		max: function (lhs, rhs)
		{
			var
				x = arguments [0] .x,
				y = arguments [0] .y,
				z = arguments [0] .z;

			for (var i = 1; i < arguments .length; ++ i)
			{
				var vector = arguments [i];

				x = Math .max (x, vector .x);
				y = Math .max (y, vector .y);
				z = Math .max (z, vector .z);
			}

			return new Vector3 (x, y, z);
		},
	});

	return Vector3;
});
