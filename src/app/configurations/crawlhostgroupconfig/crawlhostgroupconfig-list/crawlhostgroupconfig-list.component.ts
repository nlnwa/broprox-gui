import {Component, OnInit} from '@angular/core';
import {CrawlHostGroupConfigService} from '../crawlhostgroupconfig.service';
import {CrawlHostGroupConfig} from '../crawlhostgroupconfig.model';

@Component({
  selector: 'app-crawlhostgroupconfig-list',
  templateUrl: './crawlhostgroupconfig-list.component.html',
  styleUrls: ['./crawlhostgroupconfig-list.component.css']
})
export class CrawlHostGroupConfigListComponent implements OnInit {

  crawlHostGroupConfigs: CrawlHostGroupConfig[];
  selectedCrawlHostGroupConfig: CrawlHostGroupConfig;


  constructor(private crawlHostGroupConfigService: CrawlHostGroupConfigService) {
  }

  ngOnInit() {
    this.crawlHostGroupConfigService.list()
      .map(reply => reply.value)
      .subscribe(crawlHostGroupConfigs => this.crawlHostGroupConfigs = crawlHostGroupConfigs);
  }

  private getIndexOfCrawlHostGroupConfig = (crawlHostGroupConfigId: String) => {
    return this.crawlHostGroupConfigs.findIndex((crawlHostGroupConfig) => {
      return crawlHostGroupConfig.id === crawlHostGroupConfigId;
    });
  };

  selectCrawlHostGroupConfig(crawlHostGroupConfig: CrawlHostGroupConfig) {
    this.selectedCrawlHostGroupConfig = crawlHostGroupConfig;
  }

  createNewCrawlHostGroupConfig() {
    const crawlHostGroupConfig: CrawlHostGroupConfig = {
      ip_range: [],
      meta: {
        name: '',
        description: '',
        label: [],
      }
    };
    // By default, a newly-created  will have the selected state.
    this.selectCrawlHostGroupConfig(crawlHostGroupConfig);
  }

  deleteCrawlHostGroupConfig = (crawlHostGroupConfig: String) => {
    const idx = this.getIndexOfCrawlHostGroupConfig(crawlHostGroupConfig);
    if (idx !== -1) {
      this.crawlHostGroupConfigs.splice(idx, 1);
      this.selectCrawlHostGroupConfig(null);
    }
    return this.crawlHostGroupConfigs
  };

  addCrawlHostGroupConfig = (crawlHostGroupConfig: CrawlHostGroupConfig) => {
    this.crawlHostGroupConfigs.push(crawlHostGroupConfig);
    this.selectCrawlHostGroupConfig(crawlHostGroupConfig);
    return this.crawlHostGroupConfigs;
  };

  updateCrawlHostGroupConfig = (crawlHostGroupConfig: CrawlHostGroupConfig) => {
    const idx = this.getIndexOfCrawlHostGroupConfig(crawlHostGroupConfig.id);
    if (idx !== -1) {
      this.crawlHostGroupConfigs[idx] = crawlHostGroupConfig;
      this.selectCrawlHostGroupConfig(crawlHostGroupConfig);
    }
    return this.crawlHostGroupConfigs;
  }
}