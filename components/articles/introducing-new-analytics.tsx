import { Article } from "@components/article-components/article";

type IntroducingNewAnalyticsProps = {
  image: string;
};

const IntroducingNewAnalytics = ({ image }: IntroducingNewAnalyticsProps) => {
  return (
    <Article>
      <Article.Content>
        <Article.Image image={image} />
        <Article.Body>
          <Article.Para>
            Analytics is at the core of Dub's DNA. Since day one, we built Dub
            to be an analytics-first platform, and we've been working hard to
            make it even better.
          </Article.Para>
          <Article.Para>
            Today, we're thrilled to introduce our new and improved analytics
            dashboard, which is now available to all Dub users.
          </Article.Para>
          <Article.Para>A few highlights:</Article.Para>

          <Article.Title title="Project-Level Analytics" />

          <Article.Para>
            For a while now, we've been{" "}
            <Article.Link href="https://github.com/dubinc/dub/issues/278">
              hearing from you
            </Article.Link>{" "}
            that you want a project-level analytics dashboard to see how all
            your links are performing at a glance.
          </Article.Para>
          <Article.Para>
            This is particularly useful if you're running a campaign with
            multiple links and want to compare how they are performing against
            one another.
          </Article.Para>
          <Article.Para>
            We're excited to announce that this is now possible with our new
            project-level analytics dashboard, which you can access by clicking
            on the <strong>Analytics</strong> tab in the nav bar.
          </Article.Para>

          <Article.BodyImage
            figcaption="Project-level analytics"
            image="https://dub.co/_next/image?url=https%3A%2F%2Fd2vwwcvoksz7ty.cloudfront.net%2Fblog%2Fproject-analytics.png&w=3840&q=75&dpl=dpl_5VRuZ8uAxhA6jhQBSKapptFxYdyU"
          />
        </Article.Body>
      </Article.Content>
      <Article.Author />
    </Article>
  );
};

export default IntroducingNewAnalytics;
