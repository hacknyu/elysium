// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReasonApollo = require("reason-apollo/src/ReasonApollo.bs.js");
var Project$ReactTemplate = require("./Project.bs.js");

var projects = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.flexDirection(Css.column),
        /* [] */0
      ]
    ]);

var Styles = /* module */[/* projects */projects];

var component = ReasonReact.statelessComponent("Projects");

var ppx_printed_query = "query getProjects  {\nprojects  {\nid  \nname  \n}\n\n}\n";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_dict.get(Caml_option.valFromOption(match), "projects");
    var tmp;
    if (match$1 !== undefined) {
      var value$1 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeArray(value$1);
      tmp = match$2 !== undefined ? match$2.map((function (value) {
                var match = Js_json.decodeObject(value);
                if (match !== undefined) {
                  var value$1 = Caml_option.valFromOption(match);
                  var match$1 = Js_dict.get(value$1, "id");
                  var tmp;
                  if (match$1 !== undefined) {
                    var value$2 = Caml_option.valFromOption(match$1);
                    var match$2 = Js_json.decodeNumber(value$2);
                    tmp = match$2 !== undefined ? match$2 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(value$2));
                  } else {
                    tmp = Js_exn.raiseError("graphql_ppx: Field id on type Project is missing");
                  }
                  var match$3 = Js_dict.get(value$1, "name");
                  var tmp$1;
                  if (match$3 !== undefined) {
                    var value$3 = Caml_option.valFromOption(match$3);
                    var match$4 = Js_json.decodeString(value$3);
                    tmp$1 = match$4 !== undefined ? match$4 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                  } else {
                    tmp$1 = Js_exn.raiseError("graphql_ppx: Field name on type Project is missing");
                  }
                  return {
                          id: tmp,
                          name: tmp$1
                        };
                } else {
                  return Js_exn.raiseError("graphql_ppx: Object is not a value");
                }
              })) : Js_exn.raiseError("graphql_ppx: Expected array, got " + JSON.stringify(value$1));
    } else {
      tmp = Js_exn.raiseError("graphql_ppx: Field projects on type Query is missing");
    }
    return {
            projects: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function ret_type(f) {
  return /* module */[];
}

var MT_Ret = /* module */[];

var GetProjects = /* module */[
  /* ppx_printed_query */ppx_printed_query,
  /* query */ppx_printed_query,
  /* parse */parse,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

var GetProjectsQuery = ReasonApollo.CreateQuery([
      ppx_printed_query,
      parse
    ]);

function projectToJs(param) {
  return {
          id: param[/* id */0],
          name: param[/* name */1]
        };
}

function projectFromJs(param) {
  return /* record */[
          /* id */param.id,
          /* name */param.name
        ];
}

function make$1(_children, projects$1) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              return ReasonReact.element(undefined, undefined, Curry.app(GetProjectsQuery[/* make */3], [
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              (function (param) {
                                  var result = param[/* result */0];
                                  if (typeof result === "number") {
                                    return React.createElement("div", undefined, "Loading");
                                  } else if (result.tag) {
                                    return React.createElement("div", undefined, React.createElement("div", {
                                                    className: projects
                                                  }, $$Array.map((function (project) {
                                                          var projectRecord = projectFromJs(project);
                                                          return ReasonReact.element(String(projectRecord[/* id */0]), undefined, Project$ReactTemplate.make(/* array */[], projectRecord[/* name */1], "aletheia", "EA526F"));
                                                        }), result[0].projects)));
                                  } else {
                                    return React.createElement("div", undefined, result[0].message);
                                  }
                                })
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.Styles = Styles;
exports.component = component;
exports.GetProjects = GetProjects;
exports.GetProjectsQuery = GetProjectsQuery;
exports.projectToJs = projectToJs;
exports.projectFromJs = projectFromJs;
exports.make = make$1;
/* projects Not a pure module */