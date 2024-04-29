import {
  Ftr,
  Container,
  TopWrap,
  Title,
  TopList,
  TopListItem,
  TopSubTitle,
  TopLink,
  BottWrap,
  Accent,
  ProvisionsWrap,
  ProvisionsList,
  ProvisionsItem,
  ProvisionsLink,
  Note,
} from "./Footer.styled";

const Footer = () => {
  return (
    <Ftr>
      <Container >
        <TopWrap>
          <Title>Raise your supplement standards.</Title>
          <TopList>
            <TopListItem>
              <TopSubTitle>Shop</TopSubTitle>
              <TopLink href="./">FAQS</TopLink>
              <TopLink href="./">Account</TopLink>
              <TopLink href="./">Cart</TopLink>
            </TopListItem>
            <TopListItem>
              <TopSubTitle>Connect</TopSubTitle>
              <TopLink href="./">Learn</TopLink>
              <TopLink href="./">care@landkind.health</TopLink>
              <TopLink href="./">855-305-9894</TopLink>
              <TopLink href="./">Instagram</TopLink>
              <TopLink href="./">Twitter</TopLink>
              <TopLink href="./">LinkedIn</TopLink>
              <TopLink href="./">Facebook</TopLink>
              <TopLink href="./">Pinterest</TopLink>
            </TopListItem>
          </TopList>
        </TopWrap>

        <BottWrap>
          <Accent>© 2023 Landkind, Inc.</Accent>
          <ProvisionsWrap>
            <ProvisionsList>
              <ProvisionsItem>
                <ProvisionsLink href="./">
                  Privacy <span>Policy</span>
                </ProvisionsLink>
              </ProvisionsItem>
              <ProvisionsItem>
                <ProvisionsLink href="./">
                  Terms <span>of Use</span>
                </ProvisionsLink>
              </ProvisionsItem>
              <ProvisionsItem>
                <ProvisionsLink href="./">
                  Return <span>policy</span>
                </ProvisionsLink>
              </ProvisionsItem>
              <ProvisionsItem>
                <ProvisionsLink href="./">Affiliates</ProvisionsLink>
              </ProvisionsItem>
              <ProvisionsItem>
                <ProvisionsLink href="./">
                  Ambassador <span>Program</span>
                </ProvisionsLink>
              </ProvisionsItem>
            </ProvisionsList>
            <Note>
              *These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease.
            </Note>
          </ProvisionsWrap>
        </BottWrap>
      </Container>
    </Ftr>
  );
};

export default Footer;
