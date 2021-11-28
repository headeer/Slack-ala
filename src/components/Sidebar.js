import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styled from 'styled-components';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from "./SidebarOption";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import InboxIcon from '@mui/icons-material/Inbox';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import {useCollection} from "react-firebase-hooks/firestore";
import {db} from "../firebase";

function Sidebar() {
    const [channels, loading, error] = useCollection(db.collection('chatRooms'));
    return (
        <SidebarContainer>
            <SidebarHeader>
                <ProfileInfo>
                    <h2>Name Surname</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        Test Testovsky
                    </h3>
                </ProfileInfo>
                <CreateIcon/>
            </SidebarHeader>

            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
            <SidebarOption Icon={PeopleAltIcon} title="People and user groups"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="file browser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption title="Add channels"/>
            {channels?.docs.map(doc => (
                <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
            ))}
        </SidebarContainer>
    );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  border-bottom: 10px;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    width: 2em;
    height: 2em;
    border-radius: 999px;
  }
`

const ProfileInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
    text-align: left;
  }

  > h3 {
    display: flex;
    font-weight: 400;
    font-size: 13px;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`
