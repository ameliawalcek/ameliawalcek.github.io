#place .nojekyll to bypass Jekyll processing
echo > .nojekyll

#if ou are deploying to a custom domain
#echo ''

git init
git checkout -B main
git add -A
git commit -m 'deploy'
cd-