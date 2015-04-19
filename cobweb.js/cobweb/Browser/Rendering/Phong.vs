// -*- Mode: C++; coding: utf-8; tab-width: 3; indent-tabs-mode: tab; c-basic-offset: 3 -*-
precision mediump float;

uniform mat4 x3d_TextureMatrix;
uniform mat3 x3d_NormalMatrix;
uniform mat4 x3d_ProjectionMatrix;
uniform mat4 x3d_ModelViewMatrix;

uniform bool x3d_Lighting; // true if a X3DMaterialNode is attached, otherwise false
uniform bool x3d_Texturing; // true if a X3DTexture2DNode is attached, otherwise false

attribute vec4 x3d_Color;
attribute vec4 x3d_TexCoord;
attribute vec3 x3d_Normal;
attribute vec4 x3d_Vertex;

varying vec4 C;  // color
varying vec4 t;  // texCoord
varying vec3 vN; // normalized normal vector at this point on geometry
varying vec3 v;  // point on geometry

void
main ()
{
	vec4 p = x3d_ModelViewMatrix * x3d_Vertex;

	if (x3d_Lighting)
		vN = normalize (x3d_NormalMatrix * x3d_Normal);

	if (x3d_Texturing)
		t = x3d_TextureMatrix * x3d_TexCoord;

	C = x3d_Color;
	v = vec3 (p);

	gl_Position = x3d_ProjectionMatrix * p;
}
