touch lib-cjs/package.json
cat >lib-cjs/package.json <<!EOF
{
    "type": "commonjs"
}
!EOF

touch lib-esm/package.json
cat >lib-esm/package.json <<!EOF
{
    "type": "module"
}
!EOF
