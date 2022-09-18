import styled from 'styled-components';

import { slate } from './colors';
import { ContextSidebar } from './components/context-sidebar';

const Wrapper = styled.div({
  display: 'flex',
  flex: 1,
});

const Viewer = styled.div({
  flex: 1,
  backgroundColor: slate.slate10,
  overflowY: 'auto',
});

const Sidebar = styled.div({
  width: '58px',
  backgroundColor: slate.slate12,
});

const Workspace = styled.div({
  width: '350px',
  backgroundColor: slate.slate10,
  overflowY: 'auto',
});

const OverflowContent = styled.div({
  height: '200%',
  background:
    'scroll 0 0 /20px 20px radial-gradient(#313131 1px,transparent 0),scroll 10px 10px /20px 20px radial-gradient(#313131 1px,transparent 0)',
});

function App() {
  return (
    <Wrapper>
      <Viewer>
        <OverflowContent />
      </Viewer>
      <Sidebar>
        <ContextSidebar />
      </Sidebar>
      <Workspace>
        <OverflowContent />
      </Workspace>
    </Wrapper>
  );
}

export default App;
