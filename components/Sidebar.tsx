import NextImage from "next/image";
import { Box, List, ListIcon, ListItem, Divider, Center, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import { MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite } from "react-icons/md";

const Sidebar = () => {
    return (
        <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX="50px" color="gray">
            <Box paddingY="20px">
                <Box width="120px" marginBottom="20px" paddingX="20px">
                    <NextImage src="/logo.svg" alt="logo" height={60} width={120} />
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;
