import {Component, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource} from '@angular/material/tree';
import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';

interface CourseNode {
  name: string;
  children?: CourseNode[];
}

interface CourseFlatNode {
    name:string;
    expandable:boolean;
    level: number;
}


const TREE_DATA: CourseNode[] = [
  {
    name: 'בריאות ',
    children: [
      {
        name: 'חטיפים דיאטטים '
      },
      {
        name: '3 פעמים טיול ביום '
      },
      {
        name: 'מנות מדויקות , בנוסף שעות ארוחה קבועות '
      }
    ],
  },
  {
    name: 'אילוף',
    children: [
      {
        name: 'אילוף לצרכים  בבית ',
        children: [
          {
            name: '"פד גמילה"'
          },
          {
            name: 'כלוב אילוף'
          }
        ],
      },
      {
        name: 'פנאי',
        children: [
          {
            name: 'לשחק עם הכלב 3 פעמים ביום מעלה את אורח החיים של הכלב '
          },
          {
            name: 'הבאת משחקים "אינטליגנטים" לכלב יכול לעזור לך להבין יותר טוב את הכלב '
          }
        ],
      },
    ],
  },
];

@Component({
  selector: 'tree-demo',
  templateUrl: 'tree-demo.component.html',
  styleUrls: ['tree-demo.component.scss']
})
export class TreeDemoComponent implements OnInit {

  // Nested Tree
  nestedDataSource = new MatTreeNestedDataSource<CourseNode>();

  nestedTreeControl = new NestedTreeControl<CourseNode>(node => node.children);

  // Flat Tree
  flatTreeControl = new FlatTreeControl<CourseFlatNode>(
      node => node.level,
      node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
      (node:CourseNode, level: number): CourseFlatNode => {
          return {
              name: node.name,
              expandable: node.children?.length > 0,
              level
          }
      },
      node => node.level,
      node => node.expandable,
      node => node.children
  );

  flatDataSource = new MatTreeFlatDataSource(this.flatTreeControl, this.treeFlattener);



  ngOnInit() {

      this.nestedDataSource.data = TREE_DATA;

      this.flatDataSource.data = TREE_DATA;

  }

    hasNestedChild(index: number, node:CourseNode) {
      return node?.children?.length > 0;
    }

    hasFlatChild(index: number, node:CourseFlatNode) {
      return node.expandable;
    }

}


