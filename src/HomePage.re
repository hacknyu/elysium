module Styles = {
  open Css;
  let errorMessage =
    style([
      display(`flex),
      flexDirection(column),
      alignItems(center),
      justifyContent(center),
      fontSize(em(1.1)),
      minWidth(px(400)),
      minHeight(px(150)),
      backgroundColor(Theme.errorBackground),
      border(px(3), solid, red),
      borderRadius(px(25)),
    ]);
  let error = style([display(`flex), flexDirection(column), alignItems(center)]);
  let hero =
    style([
      display(`flex),
      flexDirection(column),
      alignItems(center),
      justifyContent(center),
      color(white),
      width(vw(100.0)),
      background(linearGradient(`deg(0), [(0, Theme.lightBlue), (100, Theme.darkBlue)])),
    ]);
  let search = style([display(`flex), alignItems(center), marginBottom(px(100))]);
  let searchBar =
    style([
      padding(px(15)),
      margin(px(20)),
      fontSize(rem(1.2)),
      borderRadius(px(25)),
      width(vw(50.)),
      maxWidth(px(600)),
      borderColor(transparent),
    ]);
  let searchIcon =
    style([
      display(`flex),
      alignItems(center),
      justifyContent(center),
      borderRadius(`percent(50.)),
      backgroundColor(orange),
      height(px(48)),
      width(px(48)),
      color(black),
      SVG.fill(currentColor),
      transform(translateX(px(-74))),
    ]);
  let heroText = style([fontWeight(`medium), margin(px(0))]);
  let heroSubtext = style([fontWeight(`light), margin(px(0)), fontSize(rem(1.3))]);
  let events = style([display(`flex), flexDirection(column), alignItems(center)]);
  let secondSection = style([transform(translateY(px(-50)))]);
};

let component = ReasonReact.statelessComponent("HomePage");

module GetEvents = [%graphql
  {|
 query getEvents {
    events {
      id
      slug
      name
      startTime
      endTime
      description
    }
 }
|}
];

module GetEventsQuery = ReasonApollo.CreateQuery(GetEvents);

let make = _children => {
  ...component,
  render: _self => {
    <div>
      <div className=Styles.hero>
        <h1 className=Styles.heroText> {ReasonReact.string("Find hackathons near you")} </h1>
        <h2 className=Styles.heroSubtext> {ReasonReact.string("Elysium is the central hub for hackathons")} </h2>
        <div className=Styles.search>
          <input className=Styles.searchBar type_="text" placeholder="Search for an event" />
          <button className=Styles.searchIcon> <Icon iconType=Search /> </button>
        </div>
      </div>
      <div className=Styles.secondSection>
        <GetEventsQuery>
          ...{({result}) =>
            switch (result) {
            | Loading => <div> {ReasonReact.string("Loading")} </div>
            | Error(_error) =>
              <div className=Styles.error>
                <div className=Styles.errorMessage>
                  {ReasonReact.string("Failed to fetch events.")}
                  <a href="/"> {ReasonReact.string("Please refresh")} </a>
                </div>
              </div>
            | Data(response) =>
              <div>
                {<div className=Styles.events>
                   {ReasonReact.array(
                      Array.map(
                        event =>
                          <Event
                            key={string_of_int(event##id)}
                            name=event##name
                            startTime={Js.Json.decodeNumber(event##startTime)}
                            endTime={Js.Json.decodeNumber(event##endTime)}
                            slug={event##slug}
                          />,
                        response##events,
                      ),
                    )}
                 </div>}
              </div>
            }
          }
        </GetEventsQuery>
      </div>
    </div>;
  },
};
