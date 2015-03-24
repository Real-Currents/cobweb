// -*- Mode: C++; coding: utf-8; tab-width: 3; indent-tabs-mode: tab; c-basic-offset: 3 -*-
precision mediump float;

uniform mat4 x3d_ProjectionMatrix;
uniform mat4 x3d_ModelViewMatrix;

uniform bool  x3d_ColorMaterial;   // true if a X3DColorNode is attached, otherwise false
uniform bool  x3d_Lighting;        // true if a X3DMaterialNode is attached, otherwise false
uniform vec3  x3d_EmissiveColor;
uniform float x3d_Transparency;

attribute vec4 x3d_Color;
attribute vec4 x3d_Vertex;

varying vec4 C; // color

void
main ()
{
	float alpha = 1.0 - x3d_Transparency;

	if (x3d_Lighting)
	{
		if (x3d_ColorMaterial)
		{
			C .rgb = x3d_Color .rgb;
			C .a   = x3d_Color .a * alpha;
		}
		else
		{
			C .rgb = x3d_EmissiveColor;
			C .a   = alpha;
		}
	}
	else
	{
		if (x3d_ColorMaterial)
			C = x3d_Color;
		else
			C = vec4 (1.0, 1.0, 1.0, 1.0);
	}

	//gl_PointSize = 10.0;
	gl_Position  = x3d_ProjectionMatrix * x3d_ModelViewMatrix * x3d_Vertex;
}