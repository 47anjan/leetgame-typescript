import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

function GenreListSkeleton() {
  return (
    <ListItem paddingY={"5px"}>
      <HStack>
        <Skeleton boxSize={"32px"} borderRadius={"8px"} />
        <SkeletonText />
       
      </HStack>
    </ListItem>
  );
}

export default GenreListSkeleton;
