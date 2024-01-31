import { Article } from "@components/article-components/article";

type PricingUpdatesProps = {
  image: string;
};

const PricingUpdates = ({ image }: PricingUpdatesProps) => {
  return (
    <Article>
      <Article.Content>
        <Article.Image image={image} />
        <Article.Body>
          <Article.Para>
            Since our <Article.Link href="introducing-dub">launch</Article.Link>{" "}
            in 2022, we've been listening to your feedback and working hard to
            improve our product – shipping a multitude of{" "}
            <Article.Link href="introducing-dub">
              updates & new features
            </Article.Link>{" "}
            over the last 15 months.
          </Article.Para>
          <Article.Para>
            Today, we're excited to introduce a new{" "}
            <Article.Link href="introducing-dub">pricing</Article.Link> model
            that will help us continue to build a product that you love. Here
            are the details:
          </Article.Para>
          <Article.Title title="New Business Plan" />
          <Article.Para>
            We're introducing a new Business plan that will replace our old
            Enterprise plan.
          </Article.Para>
          <Article.Para>
            The new Business plan will be priced at $49/month (or $39/month if
            billed annually) and will give you the following features:
          </Article.Para>

          <Article.ButtonLink
            href="/help/article/business-plan"
            text="Dub.co Business Plan"
          />
          <Article.Para>
            Existing users on the Pro plan will be grandfathered in at the old
            price ($9/month) – as a thank you for being an early supporter of
            Dub.
          </Article.Para>
          <Article.Title title="Pro Plan Changes" />
          <Article.Para>
            We're also making some changes to our Pro plan.
          </Article.Para>
          <Article.Para>
            The new Pro plan will be priced at $24/month (or $19/month if billed
            annually) and will give you the following features:
          </Article.Para>
          <Article.ButtonLink
            href="/help/article/pro-plan"
            text="Dub.co Pro Plan"
          />
          <Article.Para>
            Existing users on the Pro plan will be grandfathered in at the old
            price ($9/month) – as a thank you for being an early supporter of
            Dub.
          </Article.Para>
        </Article.Body>
      </Article.Content>
      <Article.Author />
    </Article>
  );
};

export default PricingUpdates;
