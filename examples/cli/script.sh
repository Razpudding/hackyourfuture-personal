mkdir test
cd test
for i in {1..5};
do
	echo $i > file $i;
done;
echo "Done";

