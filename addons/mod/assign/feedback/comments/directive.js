// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

angular.module('mm.addons.mod_assign')

/**
 * Directive to render assign feedback comments.
 *
 * @module mm.addons.mod_assign
 * @ngdoc directive
 * @name mmaModAssignFeedbackComments
 */
.directive('mmaModAssignFeedbackComments', function($mmaModAssign, $mmText) {
    return {
        restrict: 'A',
        priority: 100,
        templateUrl: 'addons/mod/assign/feedback/comments/template.html',
        link: function(scope, element, attributes) {
            if (!scope.plugin) {
                return;
            }

            angular.element(element).on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (scope.text && scope.text != "") {
                    // Open a new state with the interpolated contents.
                    $mmText.expandText(scope.plugin.name, scope.text, false, scope.assignComponent, scope.assign.cmid);
                }
            });

            scope.text = $mmaModAssign.getSubmissionPluginText(scope.plugin);
        }
    };
});
